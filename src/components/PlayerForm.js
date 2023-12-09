import React from 'react'
import { useState, useEffect } from 'react'
import { Button } from 'react-bootstrap';

function PlayerForm() {
    const [formData, setFormdata] = useState({
        name: '',
        score: 0,
    })

    const handleOnChange = (event)=> {
        setFormdata(
             {
                 ...formData,
                 [event.target.name]: event.target.value
             }
        )
     }
 

    function handleSubmit(e){
        e.preventDefault()
        console.log(formData)
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
                onChange={handleOnChange}
                className='block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                /></label>
                <Button variant="primary" type="submit" onClick={handleSubmit}>ADD PLAYER</Button>
            
        </form>
    </div>
  )
}

export default PlayerForm