import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Conditionrender from './Conditionrender';
import Tables from "./Tables";
import  Passing  from "./Passing";
import Setstate from "./Usestate";
import Useeffs from './Useeffect';
import Useref1 from './Useref';
// import Parentcomponent from './Parentcomponent';
import Childcomponent from './Childcomponent';
import Tables2 from "./Tables2"
import Filter from "./Filter"


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  {/* <Parentcomponent /> */}
  {/* <Passing/>  */}
  {/* <Setstate / */}
  {/* <Useeffs /> */}
  {/* <Useref1 /> */}
  {/* <Filter /> */}
  <Tables2 />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
