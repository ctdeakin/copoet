import React, {useState} from 'react'

export default function useTitle(initial){
    const [title, setTitle] = useState(initial)
    return [title, setTitle]
}