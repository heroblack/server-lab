const express = require('express')  
const config = require('../config')
const app = express()
const server = require('http').Server(app)
const router = require('../network/routes')
const morgan = require('morgan')
var pino = require('express-pino-logger')()


//middlewares
// var myLogger = function (req, res, next) {
//     console.log(req);
//     next();
//   };

//app.use(morgan('dev')); 
//app.use(pino) 
app.use(express.urlencoded({extended:false}))
app.use(express.json())
app.set("json spaces", 2);


//router
router(app)

// function middleWare(err, req, res, next) {
//     console.log('testing middleware..')
// }
// app.use(middleWare)


server.listen(config.api.port, ()=>{
    console.log(`The server running in http://localhost:${config.api.port}`)

})

