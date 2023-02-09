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


router.post('/api/register',catchAsyncError(async (req,res)=>{
    const {email,password,username} = req.body
    const user = new User({email,username})
    const registeredUser = await User.register(user,password)
    res.redirect('/api/login')
}))

router.post("/api/login",passport.authenticate('local',
{failureFlash:false,failureRedirect:"/api/register"}),(req,res)=>{
res.redirect('/api/home')

})



module.exports = router