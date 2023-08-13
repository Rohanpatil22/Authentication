import mongoose from "mongoose";
import { Schema } from "mongoose";

const userSchema=new mongoose.Schema({

    name:{
        type:String,
      
    },
    email:{
        type:String,
       
    },
    mobno:{
        type:Number,
        
    },
    password:{
        tye:String,
        
    },
    token:{
        type:String,
    }
},
{timestamps:true});

export default mongoose.model('Logindata',userSchema);