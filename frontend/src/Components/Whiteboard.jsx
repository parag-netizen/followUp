import React from 'react'
import '../Components/Whiteboard.css'
import { ReactFlow } from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import { FaExpand } from "react-icons/fa6";

const Whiteboard = () => {
    const expand_box = () => {

    }
    return (

        <div className='expand' onClick={expand_box}>
            <FaExpand />
        </div>

    )
}

export default Whiteboard;