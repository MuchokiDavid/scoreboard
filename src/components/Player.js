import React from 'react'
import { useState } from 'react'
import Footer from './Footer'
import Header from './Header';
import { FaCrown } from "react-icons/fa";//black
import { LuCrown } from "react-icons/lu";//white
import { playerList } from '../data/ListPlayers';


function Player() {
  const [player, setPlayer] = useState(playerList);

  const handleSubmit = (data) => {
    setPlayer ((prevList) => [...prevList, data])
  }

  const playersList= player.map((p, index)=> {
    return (
      <div key={index} className="bg-white">
        <p>{p}</p>
      </div>
    )
  })
  
  return (
    <div>
      <Header/>
      <div>
        <h1>Player</h1>
        {playersList}
      </div>
      <Footer handleForm = {handleSubmit}/>
    </div>
  )
}

export default Player