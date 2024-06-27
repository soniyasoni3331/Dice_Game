import React from 'react'

function NumberSelector({error,selectedNum, setSelectedNum}) {

  const arr = [1, 2, 3, 4, 5, 6];

  const handleSelectedNum = (value)=>{
  setSelectedNum(value);      
  }
  return (
    <div className='flex flex-col gap-y-[30px]'>
      <p className=''>{error}</p>
      <div className='flex gap-x-6 items-center justify-center'>
        {
          arr.map((value, item)=>(
            <div
            onClick={(e)=>handleSelectedNum(e.currentTarget.innerText)}
            key={item} 
            className={`border border-black ${selectedNum == value ?'bg-black text-white' : 'bg-white text-black'} ellipsis w-[72px] h-[72px] text-lg`}
            >
              <p className='font-semibold text-center p-5'>{value}</p>
            </div>
          ))
        }
      </div>
      <div className='flex justify-end'>
        <h1 className='font-bold text-lg'>Select Any Number</h1>
      </div>
    </div>
  )
}

export default NumberSelector

