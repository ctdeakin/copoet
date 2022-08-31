import React, {useEffect} from 'react'
import Home from './components/Home.jsx'
import socket, {initSocket} from './socket.js'

export default function App() {

    useEffect(() => {
        initSocket(socket)
    }, [])

    return (
    <div>
        <Home />
    </div>
)
}