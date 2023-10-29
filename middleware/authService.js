const jwt= require('jsonwebtoken');
const config=require('../config')

const generateAuthToken = async function (userId,userDetails){
try{
    const token= await jwt.sign({id:userId},config.secretKey)
        .then((genToken)=>{
            console.log("Token Generated-",Boolean(genToken));
            
            userDetails.token=token;
            userDetails.save();
            return token;
        })
        .catch((err)=>{
            console.log('Error created Token-',err)
        })
}catch(err){
    console.log("Error Encountred-",err);
}
}

const verifyToken = async function (){

}

module.exports={generateAuthToken,
                verifyToken
            }