import React, { useState } from 'react';
import RegisterForm from './RegisterForm';
import LoginForm from './Login';

const App = () => {
  const [isRegistered, setIsRegistered] = useState(false);

  const handleRegister = (status) => {
    setIsRegistered(status);
  };

  return (
    <div className="app-container">
      {isRegistered ? (
        <LoginForm />
      ) : (
        <RegisterForm onRegister={handleRegister} />
      )}
    </div>
  );
};

export default App;
