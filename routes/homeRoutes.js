const express=require('express');
const app=express();
const router= express.Router();
const middleware=require('../middleware/authService');
let {
    signUpDetails
}=require('../controllers/homeController')
// const staticPath= path.join(__dirname,'/src')

// app.use(express.static(staticPath))
router.get('/',signUpDetails)
// router.get('/',middleware.generateAuthToken,signUpDetails)


module.exports=router;