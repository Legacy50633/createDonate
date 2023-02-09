const express = require('express')
const mongoose = require('mongoose')
const app = express();
const path = require('path')
const User = require('./Models/user')
const userRoutes = require('./routes/user')
const donatorRoutes = require('./routes/donator')
const creatorRoutes = require('./routes/creator')
const {isLoggedIn} = require('./middleware/login')
const ExpressError = require('./middleware/ExpressError')

app.set('views',path.join(__dirname,'views'))
app.set('view engine','ejs')
app.use(express.urlencoded({extended:true}))
app.use(express.static('public'))
const session = require('express-session')
const flash = require('connect-flash')
const passport = require('passport')
const LocalStrategy = require('passport-local');

mongoose.set('strictQuery',true)
mongoose.connect('mongodb://0.0.0.0:27017/donate',{
    useUnifiedTopology:true,
    useNewUrlParser:true
})
const db = mongoose.connection
db.on("error",console.error.bind(console,"connection error   "));
db.once("open",()=>{
    console.log("Hooked bro")
})



const sessionConfig = {

       
    secret:"hope",
     resave:false,
     saveUninitialized:true,
     cookie:
     {
         httpOnly:true,
         expires:Date.now() +1000*60*60*24*7,
         maxAge:1000*60*60*24*7
     }
} 

app.use(session(sessionConfig))
app.use(passport.initialize())
app.use(passport.session())
passport.use(new LocalStrategy(User.authenticate()))
passport.serializeUser(User.serializeUser())
passport.deserializeUser(User.deserializeUser())


app.get('/api/home',isLoggedIn,(req,res)=>{
    res.render('home')
})

app.use('/',donatorRoutes)
app.use('/',userRoutes)
app.use('/',creatorRoutes)



app.all("*",(req,res,next)=>{                                          // trigerred when ever the req route doesn't match any of the above routes
next(new ExpressError("page not found"),404)
})

app.use( (err,req,res,next)=>{
    const{message="Something went wrong",statusCode= 500} = err        // basic error handler 
res.status(statusCode).send(message)
})

app.listen(3000,(req,res)=>{
    console.log("Donate to Show Love!")
})
