import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Display from './component/button';
import Accordiancomponent from './component/accordian';
import Spinnercomponent from './component/spinser';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbarcomponent from './navbar';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Display /> */}
    <Navbarcomponent/>
    <Spinnercomponent></Spinnercomponent>
    <Accordiancomponent/>
    

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
