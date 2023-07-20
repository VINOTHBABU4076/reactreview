import React, { useState, useEffect } from 'react';

const Useeffs = () => {
  const [count, setCount] = useState(0);
  const [msg, setMsg] = useState('update value');

  useEffect(() => {
    console.log("render time:", count);
    console.log("msg updated:", msg);
  }, []);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Increase value</button>
      <button onClick={() => setMsg('value is updated')}>Click here</button>
      <p>Value is: {count}</p>
      <p>Updmsg: {msg}</p>
    </div>
  );
};

export default Useeffs;
