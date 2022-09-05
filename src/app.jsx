import React, {useEffect, useState} from 'react'
import Home from './components/Home.jsx'
import socket, {initSocket} from './socket.js'


export default function App() {
    const [poem, setPoem] = useState([]);

    useEffect(() => {
        initSocket(socket)
        
    }, [])

    return (
    <div>
        <Home poem={poem} setPoem={setPoem}/>
    </div>
)
}