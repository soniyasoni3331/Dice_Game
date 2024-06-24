import React from 'react'

function RollDice({RollDice, currentDice}) {

  return (
    <div onClick={RollDice}>
        <img src={`/src/assets/dice_${currentDice}.png`} alt="Dice 1" />
    </div>
  )
}

export default RollDice