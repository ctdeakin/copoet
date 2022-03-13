import React, {useState} from 'react'
import {completeMe} from '../../../database/routes'

function useAI(initialPrompt) {
    //temperature sets degree of creativity/randomness for response
    const [temp, setTemp] = useState(.6)
    const [trainingMaterial, setTrainingMaterial] = useState(initialPrompt)

    async function newCompletion(prompt){
       const {text} = await completeMe(prompt.concat(trainingMaterial), temp)
       setTrainingMaterial(trainingMaterial.concat(prompt))
       console.log(text)
       return text
    }

    return {
    newCompletion,
    setTemp
    }
}

export default useAI