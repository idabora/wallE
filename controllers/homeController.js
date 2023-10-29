const db = require('../models/index');
const express=require('express');
const app= express();
const path = require('path');

const staticPath= path.join(__dirname,'../src')


app.use(express.static(staticPath));


module.exports.signUpDetails= async (req,res)=>{
    console.log("DONEEEEEEEE");
    res.sendFile(path.join(staticPath,'/screen','signIn.html'));

    // try{

    //     const {firstname,lastname,dob,gender,username,email}=req.body;
        
    //     if(!firstname || !dob || !email || !username){
    //         throw new Error('First name , DOB , Email , Username is necessary to SignUp.')
    //     }

    //     const user = await db.User.find(email)
    //     if(user){
    //         return res.status(409).json({message:'User with this email Already Exist.'});
    //     }





        
        
    // }catch(err){
    //     console.log(err);
    // }
}

