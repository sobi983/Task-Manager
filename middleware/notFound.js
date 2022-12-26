module.exports.notFoundMiddleware = (req,res,next)=>{
    res.status(401).json({"message": "URL Not found"})
    next()
}

