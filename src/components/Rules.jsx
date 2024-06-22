import React from 'react'

function Rules() {
  return (
    <div className='w-[794px] h-[208px] bg-gray-500'>
        <h2 className='font-bold text-3xl text-center'>How to play dice game</h2>
        <div className='flex flex-col gap-y-1 text-sm text-left'>
        <p>Select any number</p>
        <p>Click on dice image</p>
        <p>after click on  dice  if selected number is equal to dice number you will get same point as dice </p>
        <p>if you get wrong guess then  2 point will be dedcuted </p>
        </div>
    </div>
  )
}

export default Rules