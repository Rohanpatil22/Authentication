
import Logindata from "../models/uerSchema.js"
import { json } from "express";
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';


export const createUser=async(req,res)=>{

    const {email,name,mobno,password}=req.body;

    const exitsUser=await Logindata.findOne({email});


    if(exitsUser)
    {
        res.status(200).json({
            success:true,
            msg:"User already exist."
        })
    }

    const bcryptPassword=await bcrypt.hash(password,10);
    const newUser=await Logindata.create({name,email,mobno,password:bcryptPassword});

    if(!newUser)
    {
        throw Error("User not created successfully.");
    }

    const token=jwt.sign({user_id:newUser._id,email},process.env.SECRET_KEY,{expiresIn:"1h"});

    newUser.token=token;

    res.status(200).json({
        newUser,
        mas:"User created succesfully."

    });

}