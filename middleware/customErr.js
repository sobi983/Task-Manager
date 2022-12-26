module.exports.customErr  = (error,req,res,next)=>{
    return res.status(500).json({err: "Something went wrong"})
}

