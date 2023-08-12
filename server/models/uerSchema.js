import mongoose from "mongoose";

const userSchema=new mongoose.Schema({

    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    mobno:{
        type:Number,
        required:true,
    },
    password:{
        tye:String,
        required:true,
    },
    token:{
        type:String,
    }
},
{timestamps:true});

export default mongoose.model('loginData',userSchema);