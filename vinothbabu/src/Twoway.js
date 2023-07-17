
import React, { useState } from 'react'

function Twoway() {
    const [name,setvalue]=useState("welcome")
    console.log({name})
  return (
    <div>
      <input type='text' value={name} onChange={(event)=>{
        const value=event.target.value
        setvalue(value)
      }}/>
      {name}
    </div>
  )
}

export default Twoway


