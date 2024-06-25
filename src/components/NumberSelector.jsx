import React, { useState } from 'react'

const Box = ()=>{
  // backgroudColor: ${(props)=> (props.isSelected ? "black" : "white")};
  // color: ${(props)=> (!props.isSelected ? "black" : "white")}
  }

function NumberSelector({error}) {

  const [style, setStyle] = useState("")
  const [selectedNum, setSelectedNum] = useState();
  // const [error, setError] = useState("");

  const arr = [1, 2, 3, 4, 5, 6];


  const handleSelectedNum = (value)=>{
    setSelectedNum(value);
    console.log(selectedNum);
    if(value===selectedNum)setStyle("black");
    console.log(style)
    console.log(value)
  }
  return (
    <div className='flex flex-col gap-y-[30px]'>
      <p className=''>{error}</p>
      <div className='flex gap-x-6 items-center justify-center'>
        {

          arr.map((value, item)=>(
            <div
            onClick={()=>handleSelectedNum(value)}
            key={item} className={`border border-black bg-${style} w-[72px] h-[72px] text-lg`}
            
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

