const express= require('express');
const app= express();

const PORT= process.env.PORT || 3030;

app.get('/',(req,res)=>{
    console.log('HOME');
    res.send("HOME");
})



app.listen(PORT,()=>{
    console.log(`listening at port ${PORT} http://localhost:${PORT}`);
})