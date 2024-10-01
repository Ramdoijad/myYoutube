import React from 'react';

const ChantMessage = ({ name, message }) => {
   
    return (
        <div className='flex text-center items-center py-1 hover:bg-gray-200'>
            <img className='h-8 w-8' src="" alt="" />
         <div>
                    <span className='ml-5 text-gray-400'>{name}</span>
                    <span className='ml-2'>{message.slice(0, 30)}</span>
                </div>
            
        </div>
    );
};

export default ChantMessage;
