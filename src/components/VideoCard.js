import React from 'react';

const VideoCard = ({ info }) => {
  if (!info) return null; 

  const { snippet } = info;
  const { channelTitle, title, thumbnails } = snippet;

  return (
    <div className='shadow-lg w-[420px] p-4 rounded-2xl'>
      <img className="h-[250px] rounded-xl w-[400px]" src={thumbnails.high.url} alt="Video thumbnail" />
      <h1 className='font-bold ml-2 text-lg w-[350px]'>{title}</h1>
      <p className=' text-gray-600 ml-3'>{channelTitle} ➡️</p>
    </div>
  );
};


export const AddVideocard=({info})=>{

  return (
<div className='p-1 m-1 border border-red-600'>
<VideoCard info={info}/>
</div>
  )
}

export default VideoCard;
