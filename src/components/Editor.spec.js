import React, {useState} from 'react'
import Editor from './Editor.jsx'
import {render, fireEvent, screen} from '@testing-library/react'
import {describe, it} from 'mocha'

describe('Keybindings', function () {
    describe('Ctrl Enter', function () {
        it('should dispatch a call for completion', async function () {
            render(<Editor/>)
            fireEvent.keyDown(screen, {key: 'Control'})
            fireEvent.keyDown(screen, {key: 'Enter'})
            
            
        })
    })
})
