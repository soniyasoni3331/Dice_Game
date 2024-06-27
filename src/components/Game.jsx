import React,{useState} from 'react'
import TotalScore from './TotalScore'
import NumberSelector from './NumberSelector'
import Rules from './Rules';
import RollDice from './RollDice';

function Game() {
    const [showRule, setShowRule] = useState(false);
    const [score, setScore] = useState(0);
    const [selectNum, setSelectedNum] = useState(0);
    const [currentDice, setCurrentDice] = useState(1);
    const [error, setError] = useState("");

    const handleShowRules = () =>{
        setShowRule((prev)=>!prev)
    }
    const generateRandomNumber = (min, max)=>{
        return Math.floor(Math.random() * (max - min) + min);
    }
    const handleResetScore =()=>{
        setScore(0);
        setCurrentDice(1);
        setSelectedNum(0);
        setError("")
    }

    const handleError = ()=>{
            setError("You have not selected any number");
    }
    
    const rollDice = () =>{
        if(selectNum === 0){
            handleError()
        }else{
            const randomNumber = generateRandomNumber(1,7);
            setCurrentDice(randomNumber);
            if(randomNumber == selectNum){
                setScore((prev)=> prev + randomNumber)
            }
            setError("")
        }
    }

    
  return (
    <div className='w-[1200px] h-full m-auto flex flex-col '>
        {/* score section */}
        <div className='h-[151px] flex w-full justify-between my-10 items-center'>
            <div className='h-full'>
            <TotalScore score={score}/>
            </div>
            <div>
            <NumberSelector error={error} setSelectedNum={setSelectedNum} selectedNum={selectNum}/>
            </div>
        </div>
        {/* dice roll section */}
        <div className='flex flex-col items-center gap-y-6'>

        <div className='flex flex-col gap-y-[10px] items-center'>
        <div>
            <RollDice RollDice={rollDice} currentDice={currentDice} />
        </div>
        <div>
            <p>Click On the Dice to roll</p>
        </div>
        </div>
       
        <div className='flex flex-col gap-y-4'>
        <button onClick={()=>handleResetScore()} className='bg-white border border-black hover:bg-black  hover:text-white rounded-md  w-[220px] font-semibold py-[10px] px-[18px]'>Reset Score</button>
        <button onClick={handleShowRules} className='bg-black hover:bg-white hover:text-black border border-black  rounded-md  w-[220px] text-white font-semibold py-[10px] px-[18px]'>Show Rules</button>
        </div>
        </div>
        {
            showRule && <Rules setShowRules={setShowRule}/>
        }

    </div>
  )
}

export default Game