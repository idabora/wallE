const db = require('../models/index');
const express=require('express');
const app= express();
const path = require('path');
// const bodyParser = require('body-parser');

const staticPath= path.join(__dirname,'../src')


app.use(express.static(staticPath));
app.use(express.json())
app.use(express.urlencoded())

module.exports.registerUser= async(req,res)=>{
    console.log("DONEEEEEEEE");
    res.sendFile(path.join(staticPath,'/screen','signIn.html'));

}


module.exports.signUpDetails= async (req,res)=>{
    try{
        console.log(req.body);
        const {firstname,lastname,dob,gender,username,email,phone}=req.body;
        
        if(!firstname || !dob || !phone || !username || !gender || !phone){
            throw new Error('First name , DOB , Email , Username is necessary to SignUp.')
        }

        const user = await db.User.find({email:email})
        if(user){
            return res.status(409).json({message:'User with this email Already Exist.'});
        }


        console.log("dskjj");


        
        
    }catch(err){
        console.log(err);
    }
}

