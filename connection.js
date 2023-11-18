// const mongoose=require('mongoose');
const dotenv = require('dotenv');

// dotenv.config({ path: './config.env' })
// mongoose.set('strictQuery',false);
// // console.log(process.env)
// mongoose.connect(`mongodb+srv://anurodhk82:${process.env.MONGODB_ATLAS_URL}@myapi.thet0hs.mongodb.net/test`)
//     .then(()=>{
//         console.log("DATABASE CONNECTED....");
//     }).catch((err)=>{
//         console.log(err)
//         console.error("SOMETHING WENT WRONG.......")
//     })


const { MongoClient } = require("mongodb");
 
// Replace the following with your Atlas connection string                                                                                                                                        
const url = `mongodb+srv://anurodhk82:${process.env.MONGODB_ATLAS_URL}@myapi.thet0hs.mongodb.net/test`;

// Connect to your Atlas cluster
const client = new MongoClient(url);

async function run() {
    try {
        await client.connect();
        console.log("Successfully connected to Atlas");

    } catch (err) {
        console.log(err.stack);
    }
    finally {
        await client.close();
    }
}

run().catch(console.dir);