import React, { Children } from 'react'
import { useState } from 'react'
import './Registrationform.css'
function Button({children}) {
  let [counter, setCounter] = useState(0)
  
  const addValue = () =>{
    
    setCounter(counter + 1)
    
    console.log(counter ,Math.random())

  }

  const removeValue = () =>{
    setCounter(counter-1)
    
    console.log(counter, Math.random())
  }
  return (
    <>
       <button className='counter-btn' onClick={addValue}>+</button>
       <button className='counter-btn'  >{counter}</button>
       <button className='counter-btn'  onClick={removeValue}>-</button>
       
    </>
  )
}

export default Button
