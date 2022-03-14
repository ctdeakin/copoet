import React from 'react'
import axios from 'axios'


export default function Sidebar(props){

    function reset() {
        props.setLine('')
        props.setPoem([])
        props.setTitle('')
    }
    async function handleClick(e) {
        switch(e.target.value){
            case 'new':
                reset()
                return
            case 'save':
                let {poem, title} = props.draft
                console.log(poem, title)
                await axios.post('/api/poems', {poem, title})
                reset()
            case 'export':
                
            case 'poems':
                await axios.get('/api/poems')
        }
    }

    return(
        <div>
            <button onClick={handleClick} value="new">New</button>
            <button onClick={handleClick} value="save">Save</button>
            <button onClick={handleClick} value="export">Export</button>
            <button onClick={handleClick} value="poems">Poems</button>
        </div>
    )
}