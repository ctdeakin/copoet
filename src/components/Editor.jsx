import React, {useState} from 'react';


export default function MyEditor() {
  const [poem, setPoem] = useState([])
  const [line, setLineState] = useState('');

  function handleChange(e) {
    setLineState(e.target.value) 
  }

  function handleKey(event) {
    if(event.key==='Enter'){
      event.preventDefault()
      event.target.value = ''
      setPoem([...poem, line])
      setLineState('')
    }
  }

  return (
    <div>
      {poem.map(line=> <div>{line}</div>)}
      <input onChange={handleChange} onKeyDown={handleKey}/>
    </div>
  );
}
