const mongoose = require('mongoose')
const Schema = mongoose.Schema
const passportLocalMongoose = require('passport-local-mongoose')
const passport = require('passport')



const Userschema = new Schema({
    email:{
        type:String,
        required:true,
        unique:true
    }
})
Userschema.plugin(passportLocalMongoose);
module.exports = mongoose.model('User',Userschema)