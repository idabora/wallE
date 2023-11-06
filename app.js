const express=require('express');
const app= express();
require('./connection')
const path=require('path');
const middleware=require('./middleware/checkLogin');
// const bodyParser = require('body-parser');

const PORT= process.env.PORT || 3030;

const staticPath= path.join(__dirname,'/src')


// app.set('view engine','hbs');
// app.set('views',staticPath)
app.use(express.json());
app.use(express.urlencoded())

app.use(express.static(staticPath));
app.get('/',middleware.checklogin,(req,res)=>{
    console.log('HOME');
    // res.sendFile(path.join(staticPath,'/screen','signIn.html'));
})

// app.get('/signup',(req,res)=>{
//     console.log("FHGVJKH")
//     res.send("OKK")
// })

app.use('/signup',require('./routes/homeRoutes'))




app.listen(PORT,()=>{
    console.log(`listening at port ${PORT} http://localhost:${PORT}`);
})