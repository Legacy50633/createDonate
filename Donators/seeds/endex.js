const Creator = require('../Models/creators')
const products = require('./creators.js')
const mongoose = require("mongoose")
mongoose.set('strictQuery',true)
mongoose.connect("mongodb://0.0.0.0:27017/donate",{
    useUnifiedTopology:true,
    useNewUrlParser:true
})
const db = mongoose.connection;
db.on("error",console.error.bind(console,"connection error   "));
db.once("open",()=>{
    console.log("Hooked bro")
})


const seedDB= async() =>{
    await Creator.deleteMany({})
   for(let i = 0;i < 15; i++){
         const ran = Math.floor(Math.random()*6);
        const list = new Creator({
            id:`${products[ran].id}`,
            name:`${products[ran].name}`,
            profession:`${products[ran].profession}`,
            profile:`${products[ran].profile}`  
          
        })
        await list.save() 
   }

}

seedDB()