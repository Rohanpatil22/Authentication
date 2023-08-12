import dotenv from "dotenv";
dotenv.config();
import express from "express";
import cors from 'cors';

const PORT=process.env.PORT || 3000;

const app=express();
app.use(express.json());
app.use(cors());



app.get('/',(req,res)=>{

    
    res.send('<h2>Welcome to the backend<h2>');
})

app.listen((PORT),()=>{
    console.log(`Your express app is working fine on PORT ${PORT}`);
})

export default app;

