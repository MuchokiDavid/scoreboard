import React, { useState } from 'react'

function Total() {
    const [player, setPlayer]= useState(0)
    const [points, setPoints]= useState(0)

    function totalCallback(players, points){
        setPoints(points)
        setPlayer(players)
    }
  return (
    <div>
        <div className='px-8 grid justify-items-start ... mt-3 w-full'>
            <h3 className='text-white ml-1'>Total Player: {player}</h3>
            <h3 className='text-white ml-1'>Total Points: {points}</h3>
        </div>
    </div>    
    )
}

export default Total