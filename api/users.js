const express = require('express')
const usersRouter = express.Router()
const {getAllUsers} = require('../database')

module.exports = usersRouter

usersRouter.get('/', async (req,res, next) => {
    try{
       const users = await getAllUsers()
       res.send({users})
    }catch(error){
        next(error)
    }
})

