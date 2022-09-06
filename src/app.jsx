import React, {useEffect, useState} from 'react'
import Home from './components/Home.jsx'
import {initChannel, channel} from './channel.js'
import * as Y from 'yjs'

export default function App() {
    const [poem, setPoem] = useState([]);

    const yDoc = new Y.Doc()
    const yArray = yDoc.getArray('poemState')

    return (
    <div>
        <Home poem={poem} setPoem={setPoem} yArray={yArray} yDoc={yDoc}/>
    </div>
)
}