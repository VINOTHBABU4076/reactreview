import React,{useState} from 'react'
import Childcomponent from './Childcomponent';

 const Parentcomponent = () => {
    const[count,setcount]=useState('');
     const handlechange=(newdata)=>{
        setcount(newdata)

     }

  return (
    <div>Parentcomponent
        <p> name:{count}</p>
        <Childcomponent ondatachange={handlechange}></Childcomponent>
    </div>
  )
}
export default Parentcomponent
