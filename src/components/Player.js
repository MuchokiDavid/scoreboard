import React from 'react'
import { useState } from 'react'
import Footer from './Footer'
import { FaCrown } from "react-icons/fa";//black
import { LuCrown } from "react-icons/lu";//white


function Player() {
  const [formData, setFormdata] = useState({
      name: '',
  })
  const handleSubmit = (data) => {
    setFormdata({
      ...formData,
      name: data,
    })
  }
  console.log(formData)
console.log(formData.name)
  return (
    <div>
      
      <Footer handleForm = {handleSubmit}/>
    </div>
  )
}

export default Player