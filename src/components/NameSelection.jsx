import React from 'react'

export default ({onNameSelection}) => {
    return <form><input onSubmit = {(e) => onNameSelection(e)} placeholder="who are you?"/></form>
}