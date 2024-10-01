


import React from 'react'

const Comment = ({data}) => {
    const {name,text,resplies}=data
  return (
    <div className='flex item-center  bg-gray-100 rounded-lg p-2  my-3'>
      <img className='h-10 rounded-full w-10' src="https://img.freepik.com/free-photo/androgynous-avatar-non-binary-queer-person_23-2151100262.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1727136000&semt=ais_hybrid" alt="" />
      <div className='px-3 shadow-sm'>
        <p className='font-bold'>{name}</p>
        <p>{text}</p>
      </div>
    </div>
  )
}

export default Comment