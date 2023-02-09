const Donate = require('../Models/donator')
const products = require('./donators.js')
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
    await Donate.deleteMany({})
   for(let i = 0;i < 20; i++){
         const ran = Math.floor(Math.random()*8);
        const list = new Donate({
            donatorName:`${products[ran].donatorName}`,
            receiverName:`${products[ran].receiverName}`,
            amount:`${products[ran].amount}`,
            msg:`${products[ran].msg}`,
            id:`${products[ran].id}`,
            currency:`${products[ran].currency}`  
          
        })
        await list.save() 
   }

}

seedDB()