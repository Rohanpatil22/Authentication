import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


function Login() {

    const [loginData,setLoginData]=useState({email:"",password:""})
    const navigate= useNavigate();
    const infoHandler=(txt,val)=>{
   
        

        if(txt==='email')
        {
            setLoginData((prevState=>{return{...prevState,email:val}}));
        }
        else if(txt==='password')
        {
            setLoginData((prevState=>{return{...prevState,password:val}}));
        }

        console.log(loginData);
    }

    const checkUser=async()=>{
        const config={
            headers:{"Content-Type" : "application/json"},
            withCredentials:true
        }
        await axios.post("http://localhost:5000/api/v1/login",loginData,config)
        .then((res)=>{
            console.log(res);
            alert(res.data.msg);
            if(res.data.msg==="User authentication succesful!!!")
            {
                console.log("inside");
                navigate("/data");
                localStorage.setItem("authenticated",true);
            }
        })
    }
  return (
    <>
        <div className='bg-neutral-600 w-1/3 m-auto mt-10 align-center p-5 rounded-2xl'>
            <table className="w-3/5 m-auto">
                <tbody>
                    <tr>
                        <td className='p-4 text-white text-xl'>Email</td>
                        <td><input type="email" onChange={(e)=>{infoHandler('email',e.target.value)}} /></td>
                    </tr>
                    <tr>
                        <td className='p-4 text-white text-xl'>Password</td>
                        <td><input type="password"  onChange={(e)=>{infoHandler('password',e.target.value)}} /></td>
                    </tr>
                    <tr>
                        <td colSpan="2" className='text-center pt-6' ><button className='text-xl bg-teal-700 p-2 w-24  rounded-xl text-white'  onClick={checkUser}>Submit</button></td>
                    </tr>
                </tbody>
            </table>
        </div>
    </>
  );
}

export default Login;