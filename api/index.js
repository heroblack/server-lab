const express = require('express')  
const config = require('../config')
const store = require('../store/dummy_db')
const app = express()
const server = require('http').Server(app)


  listarData = async (tabla) => {
    try {
      let response = await store.list(tabla)
      console.log(response)
      }
      catch(error){
      console.log(error.message)
      }
    }
      
  getId = async (tabla,id) => {
    try {
    let response = await store.get(tabla,id)
    console.log(response)
    }
    catch(error) {
      console.log(error.message)
    }
  }
    
  
  upsert = async (tabla,data) => {
    try {
     let response = await store.upsert(tabla,data)
     console.log(response)
    }
    catch(error) {
      console.log(error)
    } 
    }
    
  remove = async (tabla, id) => {
    try {
    let response = await store.remove(tabla,id)
    console.log(response)
    }
    catch(error) {
      console.log(error.message)
    }
  }
  
  query = async (tabla, q) => {
    try {
    let response = await store.query(tabla,q)
    }
    catch(error) {
       console.log(error.message)
    }    
}

async  function main() {
   //await query('user',{name:'David'}) 
   await listarData('user')
   console.log('.....')
   await remove('user', "5")
  console.log('.......')
  await listarData('user')

// await listarData('user')

}

server.listen(config.api.port, ()=>{
    console.log(`The server running in http://localhost:${config.api.port}`)
    main()
})

