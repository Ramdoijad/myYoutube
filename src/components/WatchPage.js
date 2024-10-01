import React, { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import ButtonList from './ButtonList';
import { useDispatch } from 'react-redux';
import { closeMenu } from '../utils/appSLice';
import CommentContainer from './CommentContainer';
import Livechat from './Livechat';

const WatchPage = () => {

  const dispatch =useDispatch()
const [searchParams]=useSearchParams()
    console.log(searchParams.get("v"))

    useEffect(()=>{
      dispatch(closeMenu())
    })
  return (
    <div className='ml-28'>
      <ButtonList />
      
 <div className='flex'>
 <iframe
    width="1000"
    height="500"
    src={`https://www.youtube.com/embed/`+searchParams.get('v')}
    title="YouTube video player"
    frameBorder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowFullScreen
  ></iframe>
  <div className=' border border-gray-200 w-96 ml-3 rounded-xl h-[477px]'>
   <Livechat/>
  </div>
 </div>
  <div>
    <CommentContainer/>
  </div>
    </div>
  )
}

export default WatchPage;
