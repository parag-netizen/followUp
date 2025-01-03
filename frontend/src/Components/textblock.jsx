import React from 'react'
import './textblock.css'

const Textblock = (props) => {

    console.log(props)

    return (
        <div className='txtnode'>
            <input className='notesheading' type="text" />
            <textarea className='textcontent' type="text" />
        </div>
    )
}

export default Textblock;