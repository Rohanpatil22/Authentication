import React from 'react';
import Login from './login';
import Signup from './signup';
import {Route,Routes,Link} from 'react-router-dom';

function App() {
  return (
    <>
    <div className='mt-10 text-center'>
      <Link to="/signup"><button className='text-xl bg-blue-800 p-2 w-28 border-white border-2 rounded-xl mr-5 text-white'>Signup</button></Link>
      <Link to="/login"><button className='border-2 border-white p-2 bg-red-800 text-white rounded-xl text-xl w-28 '>Login</button></Link>
    </div>
    <div>
     <Routes>
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<Signup/>}/>
      </Routes>
    </div>
    
    {/* <Login/> */}
    {/* <Signup/> */}
    </>
  );
}

export default App;
