import React, {useState} from 'react'
import TipTapEditor from './TipTapEditor.jsx'
import Editor from './Editor.jsx'
import Sidebar from './Sidebar.jsx'
import useAI from './hooks/useAI.jsx'



export default function Home({poem, setPoem, yArray, yDoc}) {

    return (
        <div className='home'>

           <Editor poem={poem} setPoem={setPoem} yDoc={yDoc} yArray={yArray}/>

        </div>
    )
}