
import app from "./app.js";
import mongoose from "mongoose";


const MONGO_URL=process.env.MONGO_URL;
console.log(MONGO_URL);


(async()=>{

    try{
        await mongoose.connect(MONGO_URL,{useNewUrlParser:true, useUnifiedTopology: true});
        console.log("Database connected succesfully!!!");
    }
    catch(err){
        console.log(err);
    }
})();