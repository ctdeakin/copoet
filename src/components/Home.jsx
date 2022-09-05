import React, {useState} from 'react'
import Editor from './Editor.jsx'
import Sidebar from './Sidebar.jsx'
import useAI from './hooks/useAI.jsx'



export default function Home({poem, setPoem}) {

    return (
        <div className='home'>
           <Editor poem={poem} setPoem={setPoem}/>
        </div>
    )
}