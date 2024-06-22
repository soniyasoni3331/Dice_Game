import React,{useState} from 'react'
import TotalScore from './TotalScore'
import NumberSelector from './NumberSelector'
import Rules from './Rules';

function Game() {
    const [showRule, setShowRule] = useState(false);

    const handleShowRules = () =>{
        setShowRule((prev)=>!prev)
    }
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
        <button className='bg-white border border-black hover:bg-black  hover:text-white rounded-md  w-[220px] font-semibold py-[10px] px-[18px]'>Reset Score</button>
        <button onClick={handleShowRules} className='bg-black hover:bg-white hover:text-black border border-black  rounded-md  w-[220px] text-white font-semibold py-[10px] px-[18px]'>Show Rules</button>
        </div>
        {
            showRule && <Rules setShowRules={setShowRule}/>
        }

    </div>
  )
}

export default Game