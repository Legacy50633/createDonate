const express = require('express')
const router = express.Router()
const Creator = require('../Models/creators')
const {isLoggedIn} = require('../middleware/login')
const catchAsyncError = require('../middleware/catchAsync')


router.get('/api/creators',isLoggedIn,async(req,res)=>{
const creators = await Creator.find({})
res.render('Creators/creator',{creators})
})



module.exports = router