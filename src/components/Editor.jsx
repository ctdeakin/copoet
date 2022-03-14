import React, { useState } from 'react';
import useAI from './hooks/useAI.jsx'
import useTitle from './hooks/useTitle.jsx'
import Title from './Title.jsx'
import Sidebar from './Sidebar.jsx'

export default function MyEditor(props) {
  const [poem, setPoem] = useState([]);
  const [line, setLine] = useState({content: '', author: 'user'});
  const [title, setTitle] = useTitle('')
  const {newCompletion}= useAI(title||'')

  function handleChange(e) {
    setLine({content: e.target.value, author:'user'});
  }

  function handleKey(event) {
    if (event.key === 'Enter') {
      event.preventDefault();
      event.target.value = '';
      setPoem([...poem, line]);
      setLine('');
    } else if (event.key === 'a' && event.getModifierState('Control')) {
        event.preventDefault();
        newCompletion(poem[poem.length-1]).then(newLine=>setPoem([...poem, {content:newLine, author: 'ai'}]))
      }
      
  }

  return (
    <div className="view">
      <div className="editor">
      <Title setTitle={setTitle} title={title}/>
      {poem.map((line,idx) => (
        <div key={idx}>{line.content}</div>
      ))}
      <input onChange={handleChange} onKeyDown={handleKey} />
      </div>
      <Sidebar className="sidebar" setPoem={setPoem} setLine={setLine} setTitle={setTitle} draft={{poem, title}}/>
    </div>
  );
}
