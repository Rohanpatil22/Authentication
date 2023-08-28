import dotenv from "dotenv";
dotenv.config();
import express from "express";
import cors from 'cors';
import router from "./routes/index.js";
import cookieParser from "cookie-parser";

const PORT=process.env.PORT || 3000;

const app=express();
app.use(express.json());
//app.use(cors());
app.use('*',cors({
    origin:true,
    credentials:true,
}));
app.use(cookieParser());



app.get('/',(req,res)=>{

    
    res.send('<h2>Welcome to the backend<h2>');
});

app.use("/api/v1",router);

app.listen((PORT),()=>{
    console.log(`Your express app is working fine on PORT ${PORT}`);
})

export default app;

