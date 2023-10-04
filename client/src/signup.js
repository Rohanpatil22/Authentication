import React, { useState } from 'react';
import axios from 'axios';

function Signup() {

    const [signupData,setSignupData]=useState({name:"",email:"",mobno:"",password:""})

    const changeHandler=(txt,val)=>{
        console.log(val);
        if(txt==='name')
        {
            setSignupData((prevState)=>{return {...prevState,name:val}});
        }
        else if(txt==='mobno')
        {
            setSignupData((prevState)=>{return {...prevState,mobno:val}});
        }
        else if(txt==='email')
        {
           setSignupData((prevState)=>{return {...prevState,email:val}});
        }
        else if(txt==='password')
        {
            setSignupData((prevState)=>{return {...prevState,password:val}});
        }
        
        console.log(signupData);
    }

    const createUser=async ()=>{
       
        await axios.post("http://localhost:5000/api/v1/create",signupData)
        .then((res)=>{
            console.log(res);
            alert(res.data.msg);

            if(res.data.msg==="User already exist.")
            {
                alert("User already exist.");
                setSignupData({name:"",email:"",mobno:"",password:""})
            }
        })

    }
  return (
    <>
     <div className='bg-neutral-600 w-1/3 m-auto mt-10 align-center p-5 rounded-2xl'>
            <table className="w-3/5 m-auto">
                <tbody>
                    <tr>
                        <td className='p-4 text-white text-xl'>Name</td>
                        <td><input type="text" onChange={(e)=>{changeHandler('name',e.target.value)}} /></td>
                    </tr>
                    <tr>
                        <td className='p-4 text-white text-xl'>Mob no</td>
                        <td><input type="text" maxLength="10" onChange={(e)=>{changeHandler('mobno',e.target.value)}} /></td>
                    </tr>
                    <tr>
                        <td className='p-4 text-white text-xl'>Email</td>
                        <td><input type="email" onChange={(e)=>{changeHandler('email',e.target.value)}} /></td>
                    </tr>
                    <tr>
                        <td className='p-4 text-white text-xl'>Password</td>
                        <td><input type="password" onChange={(e)=>{changeHandler('password',e.target.value)}} /></td>
                    </tr>
                    <tr>
                        <td colSpan="2" className='text-center pt-6' ><button className='text-xl bg-teal-700 p-2 w-24  rounded-xl text-white' onClick={createUser}>Submit</button></td>
                    </tr>
                </tbody>
            </table>
        </div>
    </>
  );
}

export default Signup;