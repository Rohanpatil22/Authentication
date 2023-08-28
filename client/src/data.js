import React from "react";
import axios from "axios";
import { useState } from "react";

function Data(){
    
    const[dataflag,setDataflag]=useState(false)

    const config={
        headers:{"Content-Type" : "application/json"},
        withCredentials:true
    }
    const requestData=async()=>{
        await axios.post("http://localhost:5000/api/v1/getData",config)
        .then((res)=>{
            console.log(res.data);
    
        })
        .catch((err)=>{
            console.log(err);
            setDataflag(false);
    
        })
    }
    
    return(
        <>
        
        <button className="bg-blue-800 text-white" onClick={requestData} >Click here</button>
        {(dataflag) && <h2 className="text-white">You have acces to the data</h2> }
        
        </>
    )
}

export default Data;