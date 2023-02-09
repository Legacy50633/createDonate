class ExpressError extends Error{
    constructor(message,statusCode){
        super()
        this.message = message                                  // the class is dedicated to the errors. So we can use this to throw errors when ever we need
        this.statusCode = statusCode                  
    }
}

module.exports = ExpressError
