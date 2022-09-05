import React, {Input} from 'react'
import {socket} from '../socket.js'

export default function Title({title, setTitle}) {
    const input = React.createRef()

    const handleSubmit = e => {
        e.preventDefault()
        setTitle(input.current.value)
    }
    
    const handleEdit = e => {
        e.preventDefault()
        setTitle(false)
    }

    if(title){
        return <h1 onClick={handleEdit}>{title}</h1>
    } else
    return <form onSubmit={handleSubmit}><input placeholder="name your poem" ref={input}/></form>


}