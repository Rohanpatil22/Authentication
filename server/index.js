import mongoose from "mongoose";
import app from "./app";

const{MONGO_URL}=process.env;

(async()=>{

    try{
        await mongoose.connect(`${MONGO_URL}/loginData`,{useNewUrlParser:true, useUnifiedTopology: true});
        console.log("Database connected succesfully!!!");
    }
    catch(err){
        console.log(err);
    }
})();