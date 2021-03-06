import React, {useState} from 'react'
import completeMe from '../../OpenAi.js'

function useAI(initialPrompt) {
    //temperature sets degree of creativity/randomness for response
    const [temp, setTemp] = useState(.9)

    async function newCompletion(prompt){
        let newPrompt = prompt||initialPrompt
       const {text} = await completeMe(newPrompt, temp)
       return text
    }

    return {
    newCompletion,
    setTemp
    }
}

export default useAI