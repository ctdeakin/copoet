const express = require('express')
const morgan = require('morgan')
const PORT = process.env.PORT || 8080;
const app = express()
const http = require('http')
const server = http.createServer(app)
const {Server} = require("socket.io")

const io = new Server(server, {
    cors: {
        origin: "*"
    }
  })
// const apiRouter = require('./api')



// app.use(morgan('dev'))
// app.use(express.json())
// app.use(express.static('./public'))

// app.use('/api', apiRouter)

// app.use('*', (req,res) => {
//     res.status(404).send('<h1>404 Not Found</h1>')
// })

// app.use((err, req, res, next) => {
//     console.error(err)
//     next(err)
// })

io.on('connection', (socket) => {
    console.log("user connected")
    socket.on('entry', (msg) => {
        socket.broadcast.emit('entry', msg)
    })
})
const handle = server.listen(PORT, async ()=> {
    try{
        // await client.connect()
        console.log(`Server listening on Port ${PORT}`)
    }catch(error){
        console.error(error)
        // await client.end()
        throw error
    }
})

module.exports = {
   handle, PORT
}