const express = require('express')
const response = require('../../../network/response')
const router = express.Router()
const Controller = require('./')
const secure = require('./secure')

router.get('/', list)
router.get('/:id', get)
router.post('/',upsert)
router.put('/',secure('update'), upsert)

async function list(req,res) {
  
  try{
    const users = await Controller.list();
    response.success(req,res, users,200)

    }
    catch(error) {
      response.error(req,res,error)
      
    }
}

async function get(req, res) { 
  try {
     const id = req.params.id
     const user = await Controller.get(id)
     if(!user) return response.error(req, res, 'no se encontro datos!!!') 
     response.success(req, res, user, 201)
  }
  catch(error) {
         response.error(req, res, error)
  }
}

async function upsert(req, res) {

  let data = req.body
  try {
        let userResponse = await Controller.upsert(data)
        response.success(req, res ,userResponse)
  }
  catch(error) {
        response.error(req, res,error.message)
  }
}

module.exports = router