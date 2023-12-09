import React from 'react'
import { useState, useEffect } from 'react'

function PlayerForm() {
    const [formData, setFormdata] = useState({
        name: '',
    })

function handleSubmit(e){
    
}
    
  return (
    <div>
        <h2>Player Form</h2>
        <form>
            <label>
                <input
                type='text'
                name='name'
                placeholder= "ENTER A PLAYER'S NAME"
                value={formData.name}
                onChange={(e)=> e.target.value}
                />
            </label>
        </form>
    </div>
  )
}

export default PlayerForm