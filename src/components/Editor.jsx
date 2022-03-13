import React, { useState } from 'react';
import useAI from './hooks/useAI.jsx'

export default function MyEditor(props) {
  const [poem, setPoem] = useState([]);
  const [line, setLine] = useState('');
  const {newCompletion}= useAI( 'Sheep dream of cotton robots')

  function handleChange(e) {
    setLine(e.target.value);
  }

  function handleKey(event) {
    if (event.key === 'Enter') {
      event.preventDefault();
      event.target.value = '';
      setPoem([...poem, line]);
      setLine('');
    } else if (event.key === 'a' && event.getModifierState('Control')) {
      if(line.length>0) {
        event.preventDefault();
        newCompletion(line).then(newLine=>{
          setLine(line + newLine)
          event.target.value=line
        }) 
      } else {
        event.preventDefault();
        newCompletion(poem[poem.length-1]).then(newLine=>setPoem([...poem, newLine]))
      }
      
      
    }
  }

  return (
    <div>
      {poem.map((line,idx) => (
        <div key={idx}>{line}</div>
      ))}
      <input onChange={handleChange} onKeyDown={handleKey} />
    </div>
  );
}
