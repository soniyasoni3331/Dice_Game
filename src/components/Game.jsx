import React,{useState} from 'react'
import TotalScore from './TotalScore'
import NumberSelector from './NumberSelector'
import Rules from './Rules';
import RollDice from './RollDice';

function Game() {
    const [showRule, setShowRule] = useState(false);
    const [score, setScore] = useState(0);
    const [selectNum, setSelectNum] = useState();
    const [currentDice, setCurrentDice] = useState(1);
    const [error, setError] = useState("");



    const handleShowRules = () =>{
        setShowRule((prev)=>!prev)
    }
    const generateRandomNumber = (min, max)=>{
        return Math.floor(Math.random() * (max - min) + min);
    }

    const handleError = ()=>{
            setError("You have not selected any number");
    }

    const randomNumber = generateRandomNumber(1,7);

    const rollDice = () =>{
        // if(!selectNum){
        //     handleError();
        // }
        if(selectNum === randomNumber){
            setCurrentDice(randomNumber);
            setScore((prev)=> prev + randomNumber)
            console.log(currentDice);
            console.log(selectNum)
        }else{
            setError(Sele)   
        }
    }

    
  return (
    <div className='w-full flex flex-col '>
        {/* score section */}
        <div className='h-[151px] flex w-full justify-between my-16 items-center'>
            <div className='h-full'>
            <TotalScore score={score}/>
            </div>
            <div>
            <NumberSelector error={error} setSelectNum={setSelectNum} selectedNum={selectNum}/>
            </div>
        </div>
        {/* dice roll section */}
        <div className='flex flex-col items-center gap-y-9'>

        <div className='flex flex-col gap-y-[15px] items-center'>
        <div>
            <RollDice RollDice={rollDice} currentDice={currentDice} />
        </div>
        <div>
            <p>Click On the Dice to roll</p>
        </div>
        </div>
       
        <div className='flex flex-col gap-y-6'>
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