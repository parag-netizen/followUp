import React, { useCallback, useEffect, useRef, useState } from 'react';
import '../Components/Whiteboard.css';
import { addEdge, Background, Controls, Handle, MiniMap, Position, ReactFlow, useNodesState } from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import { FiMaximize } from "react-icons/fi";
import { FiMinimize } from "react-icons/fi";
import { BsFileEarmarkRichtextFill } from "react-icons/bs";
import { BsFillFileTextFill } from "react-icons/bs";
import Textblock from './textblock';
import Txtimg from './txtimg';
import { MdDragHandle } from 'react-icons/md';

const Whiteboard = () => {

    const Diagrampane = useRef(null)
    const expand1 = useRef(null)
    const minimize = useRef(null)
    const diagramBox = useRef(null)

    const initialnodes = [
        {
            id: '1',
            data: {
                label: "node 1"
            },
            position: { x: 0, y: 0 },
            type: 'textblock',
        },
        {
            id: '2',
            data: {
                label: "node 1"
            },
            position: { x: 100, y: 100 },
            type: 'textblock',
        },
        {
            id: '3',
            data: {
                label: "node 3"
            },
            position: { x: 100, y: 100 },
            type: 'textblock',
        },
        {
            id: '4',
            data: {
                label: "node 4"
            },
            position: { x: 100, y: 100 },
            type: 'textblock',
        },
    ]

    const nodeTypes = {
        'textblock': Textblock,
        'imgtxt': Txtimg,
    }

    const initialedges = [{
        id: '1-5', source: '1-2-3-4', target: '2-3-4-5', animated: true,
    }]

    const [nodes, setNodes, onNodesChange] = useNodesState(initialnodes)
    const [edges, setEdges, onEdgesChange] = useNodesState(initialedges)

    console.log(ReactFlow)

    const onConnect = useCallback((Connection) => {
        const edge = { ...Connection, animated: true, id: `${edges.length} + 1` }
        setEdges(prevEdges => addEdge(edge, prevEdges))
    }, [edges])

    const expand_box = () => {
        Diagrampane.current.style.width = '1900px'
        Diagrampane.current.style.height = '2300px'
        diagramBox.current.style.height = '2300px'
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
            <div className='imgtxt'><BsFileEarmarkRichtextFill /></div>
            <div className='txtbox'><BsFillFileTextFill /></div>
            <div ref={expand1} className='expand' id='exp' onClick={expand_box}>
                <FiMaximize />
            </div>
            <div ref={minimize} className='minimize' id='mini' onClick={min_box}>
                <FiMinimize />
            </div>
            <div ref={diagramBox} className='diagramBox'>
                <ReactFlow
                    nodes={nodes}
                    edges={edges}
                    onNodesChange={onNodesChange}
                    onEdgesChange={onEdgesChange}
                    onConnect={onConnect}
                    nodeTypes={nodeTypes}
                    fitView>
                    <Background />
                    <Controls />
                </ReactFlow>
            </div>
        </div>
    )
}

export default Whiteboard;