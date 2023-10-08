import React from 'react';
import Login from './login';
import Signup from './signup';
import Data from './data';
import {Route,Routes,Link, Outlet} from 'react-router-dom';
import Home from './Home';


function App() {

  localStorage.setItem("authenticated",false);
  return (
    <>
    <Home/>
    <Outlet/>
    
    </>
  );
}

export default App;
