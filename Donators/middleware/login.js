module.exports.isLoggedIn = (req,res,next)=>{
    if(!req.isAuthenticated()){
      return  res.redirect('/api/login')
    }
    next()
}