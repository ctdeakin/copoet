import React, { useState, useEffect } from 'react';
import useAI from './hooks/useAI.jsx'
import useTitle from './hooks/useTitle.jsx'
import Title from './Title.jsx'
import Sidebar from './Sidebar.jsx'
import TipTapEditor from './TipTapEditor.jsx'
import * as Y from 'yjs'


export default function MyEditor({poem, setPoem, yArray, yDoc}) {
  
  const [line, setLine] = useState({content: '', author: 'user'});
  const [title, setTitle] = useTitle('')
  const {newCompletion}= useAI(title||'')
  

  function handleChange(e) {
    e.preventDefault()
    setLine({content: e.target.value, author: 'user'})
  }

  function handleKey(event) {
    if (event.key === 'Enter') {
      event.preventDefault();
      event.target.value = ''
      yDoc.transact(() => {
        console.log(yArray.toArray())
        yArray.push(line)
      }
        
      )
      
      setLine('');
    } else if (event.key === 'a' && event.getModifierState('Control')) {
        event.preventDefault();
        const promptLine = poem[poem.length-1].content
        newCompletion(promptLine).then(newLine=>
          yDoc.transact(() => {
            yArray.push({content:newLine, author: 'ai'})
          })
          )
      }
      
  }

  return (
    <div className="view">
      <div className="editor">
      <Title setTitle={setTitle} title={title}/>
      {yArray?.toArray().map(line => <p>{line.content}</p>)}
      <input onChange={handleChange} onKeyDown={handleKey} value={line.content}/>
      </div>
      <Sidebar className="sidebar" setPoem={setPoem} setLine={setLine} setTitle={setTitle} draft={{poem, title}}/>
    </div>
  );
}
