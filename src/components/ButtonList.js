import  Button  from './Button.js'
import React from 'react'


const ButtonList = () => {
  const buttons=[
    "All","Sports","Kapil Sharma","Entertenment","Cricket",'Ronaldo',"coding","Namaste dev","Salman Khan","SHahrukh Khan","Shardhha Kapur"
  ]
  return (
    <div className='flex  overflow-x-auto py-2  bg-white  ' >
    
    {
      buttons.map((items,index)=>
        <Button key={index} name={items}/>
      )
    }
    </div>
  )
}

export default ButtonList