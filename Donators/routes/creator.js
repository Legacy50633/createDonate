const express = require('express')
const router = express.Router()
const Creator = require('../Models/creators')
const {isLoggedIn} = require('../middleware/login')             //this middleware ensure's whether the user is authenticated or not
const catchAsyncError = require('../middleware/catchAsync')         // this one will catch asynchronous errors


router.get('/api/creators',isLoggedIn,async(req,res)=>{
const creators = await Creator.find({})                                     //paginated api to return the all creators details
res.render('Creators/creator',{creators})
})



module.exports = router
