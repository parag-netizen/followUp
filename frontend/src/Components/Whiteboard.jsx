import React, { useCallback, useEffect, useRef, useState } from 'react';
import '../Components/Whiteboard.css';
import { addEdge, Background, Controls, MiniMap, Position, ReactFlow, useNodesState } from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import { FiMaximize } from "react-icons/fi";
import { FiMinimize } from "react-icons/fi";
import { BsFileEarmarkRichtextFill } from "react-icons/bs";
import { BsFillFileTextFill } from "react-icons/bs";
import Textblock from './textblock';

const Whiteboard = () => {

    const Diagrampane = useRef(null)
    const expand1 = useRef(null)
    const minimize = useRef(null)

    const initialnodes = [{
        id: '1',
        data: {
            label: "node 1"
        },
        position: { x: 0, y: 0 },
        type: 'textblock',
    },
    ]

    const nodeTypes = {
        'textblock': Textblock,
    }

    const initialedges = [{
        id: '1-2', source: "1", target: "2", animated: true
    }]

    const [nodes, setNodes, onNodesChange] = useNodesState(initialnodes)
    const [edges, setEdges, onEdgesChange] = useNodesState(initialedges)


    const onConnect = useCallback((Connection) => {
        const edge = { ...Connection, animated: true, id: `${edges.length} + 1` }
        setEdges(prevEdges => addEdge(edge, prevEdges))
    }, [])

    const expand_box = () => {
        Diagrampane.current.style.width = '1900px'
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
            <div className='diagramBox'>
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