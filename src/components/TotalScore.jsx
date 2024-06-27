import React from 'react'

function TotalScore({score}) {
  return (
    <div className='flex flex-col justify-end items-center h-full'>
      <h1 className='text-8xl font-semibold'>{score}</h1>
      <p className='text-lg font-semibold'>Total Score</p>
    </div>
  )
}

export default TotalScore