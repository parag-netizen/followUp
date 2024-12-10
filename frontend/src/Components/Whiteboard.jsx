import React, { useEffect, useRef } from 'react'
import '../Components/Whiteboard.css'
import { ReactFlow } from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import { FiMaximize } from "react-icons/fi";
import { FiMinimize } from "react-icons/fi";


const Whiteboard = () => {

    const Diagrampane = useRef(null)
    const expand1 = useRef(null)
    const minimize = useRef(null)

    const expand_box = () => {
        Diagrampane.current.style.width = '1700px'
        expand1.current.style.display = 'none';
        minimize.current.style.display = 'flex';
        console.log(Diagrampane.current.style.width)
    }

    const min_box = () => {
        Diagrampane.current.style.width = '600px'
        minimize.current.style.display = 'none';
        expand1.current.style.display = 'flex';
        console.log(Diagrampane.current.style.width)
    }

    return (
        <div ref={Diagrampane} className='Diagram__pane'>
            <div ref={expand1} className='expand' onClick={expand_box}>
                <FiMaximize />
            </div>
            <div ref={minimize} className='minimize' onClick={min_box}>
                <FiMinimize />
            </div>
            <div className='diagramBox'></div>
        </div>
    )
}

export default Whiteboard;