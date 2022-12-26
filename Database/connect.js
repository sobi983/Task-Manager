const mongoose  = require("mongoose")


module.exports.connectionDataBase= (url) => {
    mongoose.set('strictQuery', true); //to remove the warning!!!
    return  mongoose.connect(url)
}

module.exports.checkStatus = ()=>{
    if(mongoose.connection.readyState == 1){
       return console.log("DATABASE Connected!")
    }
    else if(mongoose.connection.readyState == 1){
       return console.log("DATABASE Connecting...")
    }
}
