import React, { useState } from 'react';
const {completeMe} = require( '../../database/routes');

export default function MyEditor() {
  const [poem, setPoem] = useState([]);
  const [line, setLineState] = useState('');

  function handleChange(e) {
    setLineState(e.target.value);
  }

  function handleKey(event) {
    if (event.key === 'Enter') {
      event.preventDefault();
      event.target.value = '';
      setPoem([...poem, line]);
      setLineState('');
    } else if (event.key === 'a' && event.getModifierState('Control')) {
      event.preventDefault();
      completeMe(line)
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
