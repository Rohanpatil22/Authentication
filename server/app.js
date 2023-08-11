const express=require('express');

require("dotenv").config();

const{PORT}=process.env;

const app=express();



app.get('/',(req,res)=>{

    
    res.send('<h2>Welcome to the backend<h2>');
})

app.listen((PORT),()=>{
    console.log("Your express app is working fine.");
})

export default app;

