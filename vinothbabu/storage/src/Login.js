import React, { useState } from 'react';
import "./Login.css"

const Login = (props) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
 
    const storedUserData = localStorage.getItem('userData');
    if (storedUserData) {
      const userData = JSON.parse(storedUserData);

      const foundUser = userData.find(
        (user) => user.username === username && user.password === password
      );

      if (foundUser) {
        alert('Login successful!');
        setLoginError(false);
      } else {
        setLoginError(true);
      }
    } else {
      alert('No user data found. Please register first.');
    }
  };

  return (
    <div className="container">
      <form action="" id="login-form" onSubmit={handleLogin}>
        <h2>LOGIN</h2>
        <div className="input-grp">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            name="username"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <div className="error"></div>
        </div>
        <div className="input-grp">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="error"></div>
        </div>
        {loginError && (
          <div className="error">Wrong credentials. Please try again.</div>
        )}
        <div>
          <button type="submit">Login</button>
          <button className='new' onClick={ () => props.onformswitch("RegisterForm")}> Not a user Click here</button>
        </div>
      </form>
    </div>
    
  );
};

export default Login;