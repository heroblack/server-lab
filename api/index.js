const express = require('express')  
const config = require('../config')
const app = express()
const server = require('http').Server(app)
const router = require('../network/routes')


//middlewares
app.use(express.urlencoded({extended:false}))
app.use(express.json())
app.set("json spaces", 2);


//router
router(app)


server.listen(config.api.port, ()=>{
    console.log(`The server running in http://localhost:${config.api.port}`)

})

