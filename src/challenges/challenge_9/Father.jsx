import React, { useState } from 'react'
import Son from './Son'

const Father = () => {

  const [valor, setvalor] = useState(0);

  const increment = (num) => {
    setvalor(valor + num);
  }
  return (
    <div>
      <h1>Father</h1>
      <p>Total: {valor}</p>
      <hr/>
      {
        list.map( (n, idx) => {
          return(
            <Son 
              key={idx} 
              num={n} 
              increment={increment} 
            />
          )
        })
      }
    </div>
  )
}

export default Father