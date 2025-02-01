import React, { useCallback, useEffect, useRef, useState } from 'react';
import '../Components/Whiteboard.css';
import { addEdge, Background, Controls, Handle, MiniMap, Position, ReactFlow, useNodesState } from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import { FiMaximize } from "react-icons/fi";
import { FiMinimize } from "react-icons/fi";
import { BsFileEarmarkRichtextFill } from "react-icons/bs";
import { BsFillFileTextFill } from "react-icons/bs";
import Textblock from './textblock';
import Txtimg from './Txtimg';

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
            position: { x: 50, y: 50 },
            type: 'textblock',
        },
    ]
    const nodeTypes = {
        'textblock': Textblock,
        'imgtxt': Txtimg,
    }

    const initialedges = [{
        id: '1', source: '', target: '', animated: true,
    }]

    const [error, setError] = useState('error')
    const [nodes, setNodes, onNodesChange] = useNodesState(initialnodes)
    const [edges, setEdges, onEdgesChange] = useNodesState(initialedges)


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
        (Diagrampane.current.style.width)
    }

    const min_box = () => {
        Diagrampane.current.style.width = '600px'
        Diagrampane.current.style.height = '800px'
        diagramBox.current.style.height = '800px'
        minimize.current.style.display = 'none';
        expand1.current.style.display = 'flex';
        (Diagrampane.current.style.width)
    }

    const addtextbox = () => {
        if (nodes.length < 7) {
            setNodes([...nodes, {
                id: `${nodes.length + 1}`,
                data: {
                    label: "node 1"
                },
                position: { x: nodes[nodes.length - 1].position.x + 50, y: nodes[nodes.length - 1].position.y + 50 },
                type: 'textblock',
            }])
        }
        else {
            setError('setError');
        }
    }

    const addimgtextbox = () => {
        if (nodes.length < 7) {
            setNodes([...nodes, {
                id: `${nodes.length + 1}`,
                data: {
                    label: "node 1"
                },
                position: { x: nodes[nodes.length - 1].position.x + 50, y: nodes[nodes.length - 1].position.y + 50 },
                type: 'imgtxt',
            }])
        }
        else {
            setError('setError');
        }
    }



    return (<>
        <p className={error}>Maximum 5 nodes are allowed per page.</p>
        <div ref={Diagrampane} className='Diagram__pane'>
            <div className='imgtxt' onClick={addimgtextbox}><BsFileEarmarkRichtextFill /></div>
            <div className='txtbox' onClick={addtextbox}><BsFillFileTextFill /></div>
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
                    zoomOnScroll={false}
                    fitView>
                    <Background />
                    <Controls />
                </ReactFlow>
            </div>
        </div>
    </>
    )
}

export default Whiteboard;