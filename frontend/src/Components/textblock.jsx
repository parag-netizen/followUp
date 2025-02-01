import React, { useState } from 'react'
import './textblock.css'
import { EdgeText, Handle, Position } from '@xyflow/react'

const Textblock = (props) => {

    return (
        <div className='txtnode'>
            <div><input className='notesheading' type="text" /></div>
            <textarea className='textcontent' type="text" />
            <Handle position={Position.Top} type="target" draggable='true' />
            <Handle position={Position.Right} type='source' draggable='true' />
            <EdgeText></EdgeText>
        </div>
    )
}

export default Textblock;