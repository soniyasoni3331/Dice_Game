import { useState } from 'react'
import './App.css'
import Start from './components/Start'
import Game from './components/Game';

function App() {
  const [isGameStarted, setIsGameStarted ] = useState(false);
  
  const handleStartGame = () =>{
    setIsGameStarted((prev)=>!prev)
  }
  return (
    <div>
      {
      isGameStarted ? <Game/> :  <Start handleStartGame={handleStartGame}/>
      }
   
    </div>


  )
}

export default App
