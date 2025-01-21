import React from 'react'
import './textblock.css'
import { EdgeText, Handle } from '@xyflow/react'

const Textblock = (props) => {

    console.log(props)

    return (
        <div className='txtnode'>
            <Handle draggable='false' type='target'></Handle>
            <input className='notesheading' type="text" />
            <textarea className='textcontent' type="text" />
            <Handle type='source' draggable='true'></Handle>
            <EdgeText></EdgeText>
        </div>
    )
}

export default Textblock;