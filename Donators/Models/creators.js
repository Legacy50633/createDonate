const mongoose = require('mongoose')
const Schema = mongoose.Schema
const creatorSchema = new Schema({
    id:{
        type:String,
        unique:true,
        required:true
    },
    name:{
        type:String,
        unique:true,   
        required:true
    },
    profession:{
        type:String,
        required:true
    },
    profile:{
        type:String
    }
})

module.exports = mongoose.model('Creator',creatorSchema)