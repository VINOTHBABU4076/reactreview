import React from 'react'

const content = () => {
    function handlenamechange(){
        const name=["c","c++","java"];
        const int=Math.floor(Math.random()*3);
        return name[int];
}
return(
    <p>
        {handlenamechange()}
    </p>
)
}

export default content
