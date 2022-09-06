import React, {useState} from 'react'
import Editor from './Editor.jsx'
import NameSelection from './NameSelection.jsx'



export default function Home({poetName, onNameSelection}) {

    if(!poetName){
        return <NameSelection onNameSelection={onNameSelection}/>
    }
    return (
        <div className='home'>
            <Editor />
        </div>
    )
}