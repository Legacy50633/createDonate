const express = require('express')
const Donator = require('../Models/donator')
const router = express.Router()
const {isLoggedIn} = require('../middleware/login')
const catchAsyncError = require('../middleware/catchAsync')

router.get('/api/donors',async(req,res)=>{
    const donors = await Donator.find({})
    res.render('Donations/alldonors',{donors})
})

router.get('/api/donate',isLoggedIn,(req,res)=>{
    res.render('Donations/donate')
})


router.get('/api/history',isLoggedIn,(req,res)=>{
    res.render('Donations/history')
})



router.post('/api/donate',async(req,res)=>{
    const donate =  new Donator(req.body.donate)
    await donate.save()
    res.redirect('/api/donors')
    })


router.post('/api/history',async(req,res)=>{
    const {donatorName,id } = req.body
    const donatorHistory = await Donator.find(
        {donatorName:donatorName,id:id})
    res.render("Donations/transfers",{donatorHistory})
        
})

module.exports = router