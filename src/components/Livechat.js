import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addMessage } from '../utils/chatSlice'
import ChantMessage from './ChantMessage'
import { generate, getRandomSentence } from '../utils/constants'
const Livechat = () => {
    const [livemsg, setlivemsg] = useState()
    const dispatch = useDispatch()
    const chatMessage=  useSelector(store=>store?.chat?.messages)
    useEffect(()=>{
 const i=   setInterval(() => {
        //api polling 
        console.log("api poling ---")
        dispatch(addMessage({
            name: generate(),
            Message:getRandomSentence()
        }))
    }, 500);

    return(()=>{
        clearInterval(i)
    })
    },[])
  return (
    <>  <div className=' h-[470px] hover:text-black rounded-lg overflow-y-scroll  flex flex-col-reverse'>
      <div>
      {
        chatMessage.map((live,index)=>
            <ChantMessage key={index} name={live.name} message={live.Message}/>
        )
       }
      </div>
      

    </div>
    <form  className='border border-gray-400 px-14 py-3 rounded-3xl mt-3 flex '
    onSubmit={(e)=>{e.preventDefault();
        dispatch(addMessage({
            name:"ram doijad",
            Message:livemsg
        }))
    }
        
    }
  
    >
    <input type="text" value={livemsg} onChange={(e)=>setlivemsg(e.target.value)} className='border border-gray-300 bg-gray-100  py-1 px-8  rounded-3xl mr-2' />
    <button className='bg-blue-800 text-white rounded-lg p-1'>send</button>
  </form>  </>
  )
}

export default Livechat