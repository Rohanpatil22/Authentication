
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
//    console.log(bcryptPassword);
    const newUser=await Logindata.create({name:name,email:email,mobno:mobno,password:bcryptPassword});

    if(!newUser)
    {
        throw Error("User not created successfully.");
    }

    // const token=jwt.sign({user_id:newUser._id,email},process.env.SECRET_KEY,{expiresIn:"1h"});
    
    // const options={
    //     expires: new Date(Date.now() + 1*60*60*1000),
    //     httpOnly:true
    // }
    // newUser.token=token;

    // res.status(200).cookie('jwtoken',token,options).json({
    //     newUser,
    //     msg:"User created succesfully."

    // });

}

export const userLogin=async(req,res)=>{

    const {email,password}=req.body;

    const findUser= await Logindata.findOne({email});

    if(!findUser)
    {
        throw Error("User not found.Please sign in.");
    }

    const validPassoword=await bcrypt.compare(password,findUser.password);

    if(!validPassoword)
    {
        res.json({
            msg:"not valid username or password",
        })
    }

    const token=jwt.sign({email},process.env.SECRET_KEY);
    
    const options={
        expires: new Date(Date.now() + 1*60*60*1000),
        httpOnly:true
    }
    
    res
    .cookie('jwtoken',token,options)
    .status(200).json({
        token,
        validPassoword,
        msg:"User authentication succesful!!!"
    });
   // console.log(validPassoword);


}


export const userData=async(req,res)=>{

    console.log(req.cookie);
    res.status(200).json({
        msg:"working fine!!!"
    })
}