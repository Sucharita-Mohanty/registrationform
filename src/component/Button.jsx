import React, { Children } from 'react'
import { useState } from 'react'
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
    <div>
       <button onClick={addValue}>+</button>
       <button>{counter}</button>
       <button onClick={removeValue}>-</button>
    </div>
  )
}

export default Button
