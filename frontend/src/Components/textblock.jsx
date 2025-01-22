import React from 'react'
import './textblock.css'
import { EdgeText, Handle, Position } from '@xyflow/react'

const Textblock = (props) => {

    console.log(props)

    return (
        <div className='txtnode'>
            <input className='notesheading' type="text" />
            <textarea className='textcontent' type="text" />
            <Handle position={Position.Bottom} type='source' draggable='true'></Handle>
            <Handle position={Position.Top} type='target' draggable='true'></Handle>
            <EdgeText></EdgeText>
        </div>
    )
}

export default Textblock;