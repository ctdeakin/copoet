import React, {useEffect, useState} from 'react'
import Home from './components/Home.jsx'
import socket from './socket.js'

export default function App() {

    const {isNamed, setName} = useState(false)

    const onNameSelection = (e) => {
        e.preventDefault()
        setPoetName(e.target.value)
    }

    return (
    <div>
        <Home poetName setPoetName onNameSelection/>
    </div>
)
}