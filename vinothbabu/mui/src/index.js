import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
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
// import Dynamic from './Dynamic';


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
  {/* <Dynamic /> */}
  </React.StrictMode>
);


