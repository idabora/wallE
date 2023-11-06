const express=require('express');
const app=express();
const router= express.Router();
const middleware=require('../middleware/authService');
// const bodyParser=require('body-parser')

app.use(express.json())
app.use(express.urlencoded())

let {
    signUpDetails,
    registerUser
}=require('../controllers/homeController')
// const staticPath= path.join(__dirname,'/src')

// app.use(express.static(staticPath))
router.get('/',registerUser)
router.post('/',signUpDetails)
// router.get('/',middleware.generateAuthToken,signUpDetails)


module.exports=router;