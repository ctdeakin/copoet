import React, {Input} from 'react'

export default function Title(props) {
    const input = React.createRef()

    const handleSubmit = e => {
        e.preventDefault()
        props.setTitle(input.current.value)
    }
    

    if(props.title){
        return <h1>{props.title}</h1>
    } else
    return <form onSubmit={handleSubmit}><input placeholder="name your poem" ref={input}/></form>


}