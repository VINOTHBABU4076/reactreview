import React, { useState } from 'react';
import RegisterForm from './RegisterForm';
import Login from './Login';

 const App = () => {
   const [isRegistered, setIsRegistered] = useState('Login');

   const handleRegister = (status) => {
   setIsRegistered(status);
  };

  return (
    <div className="app-container">
      {
        isRegistered==="Login"? <Login onformswitch={handleRegister}/> :<RegisterForm onformswitch={handleRegister}/>      
        }
      
    </div>
  );
};

export default App;
