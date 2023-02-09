module.exports.isLoggedIn = (req,res,next)=>{
    if(!req.isAuthenticated()){
      return  res.redirect('/api/login')                                 // this middle ensures the user is authenticated or not
    }                                                                      
    next()
}
