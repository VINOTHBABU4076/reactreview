import React, { useState } from 'react'
import Parentcomponent from './Parentcomponent'

 const Childcomponent = ({ondatachange}) => {
    const[value,setvalue]=useState('')

    const valuechange=(event) =>{
        const newdata=event.target.value;
        setvalue(newdata);
        ondatachange(newdata);
    }
  
  
  
    return (
    <div>Childcomponent
        <p> name:{value}</p>
        <input type="text" value={value} onChange={valuechange} />
    </div>
  )
}
export default Childcomponent
