import React, {  useState } from 'react'

const Box = ()=>{
  // backgroudColor: ${(props)=> (props.isSelected ? "black" : "white")};
  // color: ${(props)=> (!props.isSelected ? "black" : "white")}
  }

function NumberSelector({error,selectedNum, setSelectedNum}) {

  const [style, setStyle] = useState({
    backgroudColor: "white",
    color: "black"
  })
  // const [selectedNum, setSelectedNum] = useState();


  const arr = [1, 2, 3, 4, 5, 6];

  // console.log(selectedNum);
  const handleSelectedNum = (value, item)=>{
    setSelectedNum(value);
    console.log(style);
      item.setStyle({
      backgroudColor: "black",
      color: "white",
    })
  }
  return (
    <div className='flex flex-col gap-y-[30px]'>
      <p className=''>{error}</p>
      <div className='flex gap-x-6 items-center justify-center'>
        {

          arr.map((value, item)=>(
            <div
            onClick={(e)=>handleSelectedNum(e.currentTarget.innerText, item)}
            key={item} 
            className={`border border-black bg-${style.backgroudColor} text-${style.color} ellipsis w-[72px] h-[72px] text-lg`}
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

