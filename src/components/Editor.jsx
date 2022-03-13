import React, { useState } from 'react';
import useAI from './hooks/useAI.jsx'

export default function MyEditor() {
  const [poem, setPoem] = useState([]);
  const [line, setLine] = useState('');
  const {newCompletion, setTemp}= useAI( 'Sheep dream of cotton robots')

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
      event.preventDefault();
      setPoem([...poem, newCompletion(line)])
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
