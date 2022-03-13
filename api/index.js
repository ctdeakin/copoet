const express = require('express')
const apiRouter = express.Router()
const usersRouter = require('./users')
const poemsRouter = require('./poems')

module.exports = apiRouter

apiRouter.use('/users', usersRouter)
apiRouter.use('/poems', poemsRouter)

