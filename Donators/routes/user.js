const express = require('express')
const passport = require('passport')
const User = require("../Models/user")
const router = express.Router()

const catchAsyncError = require('../middleware/catchAsync')        

router.get('/api/register',(req,res)=>{
    res.render('Authenticate/register')       
})



router.get('/api/login',(req,res)=>{
    res.render('Authenticate/login')         
})


router.post('/api/register',async (req,res)=>{
    const {email,password,username} = req.body
    const user = new User({email,username})                               //the api to register user
    const registeredUser = await User.register(user,password)
    res.redirect('/api/login')
})

router.post("/api/login",passport.authenticate('local',
{failureFlash:false,failureRedirect:"/api/register"}),(req,res)=>{            //the api to login user and failure case it will redirect to the register api
res.redirect('/api/home')                                                  

})



module.exports = router
