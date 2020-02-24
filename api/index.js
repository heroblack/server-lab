const express = require('express')  
const config = require('../config')

const app = express()
const server = require('http').Server(app)




server.listen(config.api.port, ()=>{
    console.log(`The server running in http://localhost:${config.api.port}`)
})

