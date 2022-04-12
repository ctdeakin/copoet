const express = require('express')
const morgan = require('morgan')
const {client} = require('./database')
const PORT = process.env.PORT
const server = express()
const apiRouter = require('./api')



server.use(morgan('dev'))
server.use(express.json())
server.use(express.static('./public'))

server.use('/api', apiRouter)

server.use('*', (req,res) => {
    res.status(404).send('<h1>404 Not Found</h1>')
})

server.use((err, req, res, next) => {
    console.error(err)
    next(err)
})

const handle = server.listen(PORT, async ()=> {
    try{
        await client.connect()
        console.log(`Server listening on Port ${PORT}`)
    }catch(error){
        console.error(error)
        await client.end()
        throw error
    }
})

module.exports = {
    handle, PORT
}