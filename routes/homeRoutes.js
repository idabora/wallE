const express=require('express');
const app=express();
const router= express.Router();
let {
    homePage
}=require('../controllers/homeController')
// const staticPath= path.join(__dirname,'/src')

// app.use(express.static(staticPath))
router.get('/',homePage)
module.exports=router;