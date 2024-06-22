import React, { useState } from 'react'
import {IoCloseOutline} from 'react-icons/io5'

function Rules({setShowRules}) {
    
  return (
    <div className='h-screen w-screen fixed top-0 left-0 bg-black/50 z-50 backdrop-blur-s'>
   <div className='w-[794px] h-[208px] fixed top-[250px] left-[750px] -translate-x-1/2 bg-red-200 rounded-md p-5 text-left flex flex-col gap-y-6'>
        <div className='flex w-full justify-between'>
        <h2 className='font-bold text-3xl'>How to play dice game</h2>
        <IoCloseOutline
        className='text-lg'
        onClick={()=> setShowRules(false)}/>
        </div>
        <div className='flex flex-col gap-y-1 text-sm px-'>
        <p>Select any number</p>
        <p>Click on dice image</p>
        <p>after click on  dice  if selected number is equal to dice number you will get same point as dice </p>
        <p>if you get wrong guess then  2 point will be dedcuted </p>
        </div>
    </div>
    </div>
  )
}

export default Rules