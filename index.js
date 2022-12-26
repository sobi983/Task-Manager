const express =  require("express")
const app = express()
const routes = require('./routes/routes')
const ratelimit = require('./middleware/rate-limit')
const connectDB = require('./Database/connect')
const { connect } = require("mongoose")
const {notFoundMiddleware} = require('./middleware/notFound')
const {customErr} = require('./middleware/customErr')
require('dotenv').config()

//Enviornment Variable 
let port = process.env.PORT

//Middleware Server

app.use(express.json())

app.use(ratelimit)

app.use(routes)
app.use(customErr)
app.set('port', port)
app.use(notFoundMiddleware)

const start = async ()=>{
    try {
        await connectDB.connectionDataBase(process.env.CONNECTION)
        connectDB.checkStatus()
        app.listen(app.get('port'), (err, success)=>{
            if(err)return console.log("Error Connecting to the server");
            return console.log(`Connected at PORT ${port}`)
        })
    } catch (error) {
        console.log("Some error occured while connection got DB or Server")
    }
}

start()
