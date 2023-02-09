const mongoose = require('mongoose')
const Schema = mongoose.Schema 
const donatorSchema = new Schema({
    donatorName:{
        type:String,
        required:true,

    },  
        receiverName:{
               type:String,
               required:true
        },
       id: {
             type:String,
             required:true
        },
    
    amount:{
        type:Number,
        required:true
    },
    currency:{
      type:String,
      required:true
    },
    msg:{
        type:String,
    }

}) 
 module.exports = mongoose.model('Donator',donatorSchema)