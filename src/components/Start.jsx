import React from 'react'
import HeaderDice from '../assets/headerDice.png'


function Start({handleStartGame}) {
  return (
        <div className='w-[1182px] h-auto mt-9 flex flex-wrap items-center justify-between'>
            {/* image section */}
            <div className='hidden sm:block'>
                <img className='w-[649px] h-[522px]' src={HeaderDice} alt="Dice" />
            </div>
            {/* heading Section */}
            <div className='flex flex-col items-end'>
                <h1 className='font-bold text-7xl my-4'>DICE GAME</h1>
                <button onClick={handleStartGame}className='bg-black hover:bg-white hover:text-black border border-black  rounded-md  w-[220px] text-white font-semibold py-[10px] px-[18px]'>Play Now</button>
            </div>
        </div>
  )
}

export default Start