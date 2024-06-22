import React from 'react'
import TotalScore from './TotalScore'
import NumberSelector from './NumberSelector'

function Game() {
  return (
    <div className='w-full flex flex-col'>
        {/* score section */}
        <div className='flex w-full justify-between '>
            <div>
            <TotalScore/>
            </div>
            <div>
            <NumberSelector/>
            </div>
        </div>
        {/* dice roll section */}
        <div className='flex flex-col gap-y-[15px]'>
        <div>
            {/* todo dice roll logic */}
        </div>
        <div>
            <p>Click On the Dice to roll</p>
        </div>
        </div>
       
        <div className='flex flex-col gap-y-6'>
        <button className='bg-white rounded-md  w-[220px] font-semibold py-[10px] px-[18px]'>Reset Score</button>
        <button className='bg-black rounded-md  w-[220px] text-white font-semibold py-[10px] px-[18px]'>Show Rules</button>
        </div>
    </div>
  )
}

export default Game