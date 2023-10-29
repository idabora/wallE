const mongoose = require('mongoose');

const userSchema= new mongoose.Schema({
    firstName:{
        type:String,
        required:[true, 'First name is required'],
        trim:true,
    },
    lastName:{
        type:String,
        trim:true        
    },
    username:{
        type:String,
        trim:true,
        unique:true,
        required:[true,'Username is required']
    },
    DOB:{
        type:Date,  //yyyy-mm-dd
        required:true,  
        trim:true
    },
    email:{
        type:String,
        required:[true,'Email is required'],
        unique:true,
        trim:true
    },
    gender:{
        type:String,
        enum:['Male','Female','Other','null'],
        default:'null'
    },
    token:{
        type:String
    }
},
{
    timestamps:true
}
);

const User = new mongoose.model('User',userSchema);
module.exports=User;