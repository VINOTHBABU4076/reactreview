import Header from "./Header";
import Usehandlebutton from "./Content";
import  Footer from "./Footer";
import './index.css';
import Content from "./Content";
import Passingprops from "./Passingprops";
import { useState } from "react";
import Twoway from "./Twoway";
// import Class from "./Class.js";
function App(){
  const[details,setDetails]=useState({
    name:'',
    email:'',
    Password:'',
    phone:'',

  }); 

  const handlechange = (e)=>{
    const{name,value}=e.target;

    setDetails ((prev) => { 
      return{...prev,[name]:value}
    });
    
  } ;
  const handlesubmit=(e) =>{
    e.preventDefault();
    console.log(details);
 
  }   
  return(
    <form   onSubmit={handlesubmit}>
       <div className="container">
        <p> Name: </p>
        <input  type="text"  id="names"  name="name" placeholder="enter name" onChange={handlechange}/>
        <p> Email: </p>
        <input type="text" id="email" name="email" placeholder="enter email" onChange={handlechange}/>
        <p> Password : </p>
        <input type="Password"  id="Password" name="Password" placeholder="enter password" onChange={handlechange}/>
        <p>phone no: </p>
        <input  type="phone" id="phone" name="phone" placeholder="+91" onChange={handlechange}/>
        <button> submit here </button>

      <h1> props passing from parent to child component </h1>
      <Passingprops name="Tenz" description="valorant" price={44}/>
      <Passingprops name="jingg" description="valorant" price={98}/>
      <Passingprops name="booster" description="valorant" price={78}/>
      <Header />
      <Content /> 
      <Footer /> 
      <Twoway />
    </div>
    </form>

  );
}


export default App;
