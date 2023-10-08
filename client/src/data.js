import React from "react";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Data(){
    const navigate=useNavigate();
  
    const [displayMsg,setDisplayMsg]=useState("")
    const config={
        headers:{"Content-Type" : "application/json"},
        withCredentials:true
    }


    const requestData=async()=>{
        
        let dataflag=localStorage.getItem("authenticated");
        console.log(dataflag);
        if(dataflag=="true"){
            await axios.post("http://localhost:5000/api/v1/getData",config)
            .then((res)=>{
                console.log(res.data);
                setDisplayMsg(res.data.msg);
        
            })
            .catch((err)=>{
                console.log(err);
               
        
            })
        }
        else{
            alert("Please login!!!");
            setDisplayMsg("You do not have access to this page please login.");
            navigate("/login")
        }

    }
    
    return(
        <>
        
        <button className="bg-blue-800 text-white" onClick={requestData} >Click here</button>
        {<h2 className="text-white">{displayMsg}</h2> }
        
        </>
    )
}

export default Data;