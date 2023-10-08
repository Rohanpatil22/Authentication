import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Route, RouterProvider, createBrowserRouter, createRoutesFromElements} from 'react-router-dom';
import Login from './login';
import Signup from './signup';
import Data from './data';

const root = ReactDOM.createRoot(document.getElementById('root'));
const route=createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App/>}>
      <Route path="signup" element={<Signup/>}/>
      <Route path="data" element={<Data/>}/>
      <Route path="login" element={<Login/>}/>
    </Route>
  )
)
root.render(
  <React.StrictMode>
  
    <RouterProvider router={route}>
     
    </RouterProvider>
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
