import React from "react";
import ItemDescription from "./ItemDescription";
function Passingprops({name,description,price}){
   return(
    <div>
        <h3>{price}</h3>
        <ItemDescription name={name} description={description}/>
    </div>
   ) ; 
}
export default Passingprops