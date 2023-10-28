const express=require('express');
const app= express();
const path=require('path');

const PORT= process.env.PORT || 3030;

const staticPath= path.join(__dirname,'/src')


// app.set('view engine','hbs');
// app.set('views',staticPath)

app.use(express.static(staticPath));

app.get('/',(req,res)=>{
    console.log('HOME');
    res.sendFile(path.join(staticPath,'/screen','signIn.html'));
})

app.use('/',require('./routes/homeRoutes'))


app.listen(PORT,()=>{
    console.log(`listening at port ${PORT} http://localhost:${PORT}`);
})