const express= require('express');
const app= express();
const path=require('path');

const PORT= process.env.PORT || 3030;

app.get('/',(req,res)=>{
    console.log('HOME');
    res.sendFile(path.join(__dirname,'/src/screen/signIn.html'));
})

app.post('/',(req,res)=>{
    console.log("Entered");
    res.send("dkjffjk")
})



app.listen(PORT,()=>{
    console.log(`listening at port ${PORT} http://localhost:${PORT}`);
})