import React, { useState, useEffect } from 'react';
import useAI from './hooks/useAI.jsx'
import useTitle from './hooks/useTitle.jsx'
import Title from './Title.jsx'
import Sidebar from './Sidebar.jsx'
import socket from '../socket.js'


export default function MyEditor({poem, setPoem}) {
  
  const [line, setLine] = useState({content: '', author: 'user'});
  const [title, setTitle] = useTitle('')
  const {newCompletion}= useAI(title||'')

  useEffect(() => 
  socket.on('entry', (msg) => {
    setPoem((poem) => [...poem, msg])
  }), [])
  

  function handleChange(e) {
    e.preventDefault()
    setLine({content: e.target.value, author: 'user'})
  }

  function handleKey(event) {
    if (event.key === 'Enter') {
      event.preventDefault();
      event.target.value = ''
      socket.emit('entry', line)
      setPoem((poem) => [...poem, line]);
      setLine('');
    } else if (event.key === 'a' && event.getModifierState('Control')) {
        event.preventDefault();
        const promptLine = poem[poem.length-1].content
        newCompletion(promptLine).then(newLine=>setPoem([...poem, {content:newLine, author: 'ai'}]))
      }
      
  }

  return (
    <div className="view">
      <div className="editor">
      <Title setTitle={setTitle} title={title}/>
      {poem.map((line,idx) => (
        <div key={idx}>{line.content}</div>
      ))}
      <input onChange={handleChange} onKeyDown={handleKey} value={line.content}/>
      </div>
      <Sidebar className="sidebar" setPoem={setPoem} setLine={setLine} setTitle={setTitle} draft={{poem, title}}/>
    </div>
  );
}
