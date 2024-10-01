import React, { useEffect, useState } from 'react';
import { YOUTUBE_VIDEO_API } from '../utils/constants';
import VideoCard,{AddVideocard} from './VideoCard';
import { Link } from 'react-router-dom';
import Shammer from '../utils/Shammer';
import { useSelector } from 'react-redux';

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true); // State for loading
  const MAX_VIDEOS = 200; // Desired number of total videos
  const videoResult=useSelector(store=>store.video)
  console.log('vide',videoResult)
  const getVideos = async () => {
    let allVideos = [];
    let nextPageToken = '';
    let totalVideos = 0;

    do {
      const response = await fetch(`${YOUTUBE_VIDEO_API}&pageToken=${nextPageToken}&pageToken=${nextPageToken}`);
      const data = await response.json();
      
      allVideos = [...allVideos, ...data.items]
      totalVideos += data.items.length;
      nextPageToken = data.nextPageToken; 
    } while (nextPageToken && totalVideos < MAX_VIDEOS); 

    setVideos(allVideos);
    setLoading(false); 
  };

  useEffect(() => {
    if (videoResult && videoResult.length > 0) {
      setVideos(videoResult);
      setLoading(false);
    } else {
      getVideos(); 
    }
  }, [videoResult]);
 
  if (loading) {
    return <Shammer/>; 
  }

  return (
    <div className="flex gap-3 flex-wrap">
      <AddVideocard info={videos[1]} />
      {
        videos.map((video) => (
          <Link to={`/watch?v=${video.id}`} key={video.id}>
            <VideoCard info={video} />
          </Link>
        ))
      }
    </div>
  );
};

export default VideoContainer;
