const mongoose=require('mongoose');
const dotenv = require('dotenv');

dotenv.config({ path: './config.env' })
mongoose.set('strictQuery',false);
// console.log(process.env)
mongoose.connect(`mongodb+srv://anurodhk82:${process.env.MONGODB_ATLAS_URL}@myapi.thet0hs.mongodb.net/test`)
    .then(()=>{
        console.log("DATABASE CONNECTED....");
    }).catch((err)=>{
        console.log(err)
        console.error("SOMETHING WENT WRONG.......")
    })