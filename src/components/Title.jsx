import React, {Input} from 'react'
import useTitle from './hooks/useTitle.jsx'

export default function Title() {
    const [title, setTitle] = useTitle('')
    const input = React.createRef()

    const handleSubmit = e => {
        e.preventDefault()
        console.log(input.current.value)
        setTitle(input.current.value)
    }
    

    if(title){
        return <h1>{title}</h1>
    } else
    return <form onSubmit={handleSubmit}><input placeholder="name your poem" ref={input}/></form>


}