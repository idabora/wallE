const mongooose = require('mongoose');

const userSchema= new mongooose.Schema({
    firstName:{
        type:String,
        required:[true, 'First name is required'],
        trim:true,
    },
    lastName:{
        type:String,
        trim:true        
    },
    DOB:{
        type:Date,  //yyyy-mm-dd
        required:true,  
        trim:true
    },
    email:{
        type:email,
        required:[true,'Email is required'],
        trim:true
    },
    gender:{
        type:String,
        enum:['Male','Female','Other']
    },
    token:{
        type:String
    }
},
{
    timestamps:true
}
)