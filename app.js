const express=require('express');
const app= express();
const path=require('path');
const middleware=require('./middleware/checkLogin')

const PORT= process.env.PORT || 3030;

const staticPath= path.join(__dirname,'/src')


// app.set('view engine','hbs');
// app.set('views',staticPath)

app.use(express.static(staticPath));
app.use('/home',require('./routes/homeRoutes'))

app.get('/',middleware.checklogin,(req,res)=>{
    console.log('HOME');
    res.sendFile(path.join(staticPath,'/screen','signIn.html'));
})



app.listen(PORT,()=>{
    console.log(`listening at port ${PORT} http://localhost:${PORT}`);
})