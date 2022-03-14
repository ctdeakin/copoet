import React, { useState } from 'react';
import axios from 'axios';

export default function Sidebar(props) {
  const [userPoems, setUserPoems] = useState([]);
  const [showList, setShowList] = useState(false);

  function reset() {
    props.setLine('');
    props.setPoem([]);
    props.setTitle('');
  }
  async function handleClick(e) {
    switch (e.target.value) {
      case 'new':
        reset();
        return;
      case 'save':
        let { poem, title } = props.draft;
        console.log(poem, title);
        await axios.post('/api/poems', { poem, title });
        reset();
        return;
      case 'export':
        //future feature to send poem to other file type
      case 'poems':
        if (showList) {
          setShowList(!showList);
        } else {
          const { data } = await axios.get('/api/poems');
          setUserPoems(data.poems);
          setShowList(!showList);
        }
    }
  }

  function PoemList() {
     if(userPoems.length>0){
            return <div>
            {userPoems.map((poem) => (
              <ul>{poem.title}</ul>
            ))}
          </div>
        }
    else{
        return(<div>No Poems</div>)
    }
  }

  return (
    <div>
      <button onClick={handleClick} value="new">
        New
      </button>
      <button onClick={handleClick} value="save">
        Save
      </button>
      <button onClick={handleClick} value="export">
        Export
      </button>
      <button onClick={handleClick} value="poems">
        Poems
      </button>
      {showList && <PoemList />}
    </div>
  );
}
