import React, { useCallback } from 'react';
import ReactFlow, { useNodesState, useEdgesState, addEdge } from 'reactflow';
import 'reactflow/dist/style.css';
 
const initialNodes = [
  { id: '1', position: { x: 0, y: 0 }, data: { label: 'getState' } },
  { id: '2', position: { x: 0, y: 200 }, data: { label: 'API Call' } },
  { id: '3', position: { x: 0, y: 400 }, data: { label: 'setState' } },
];
const initialEdges = [
    { id: 'e1-2', source: '1', target: '2' },
    { id: 'e2-3', source: '2', target: '3' },
];
 
export default function ZusControlFlow() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
 
  const onConnect = useCallback(
    (params: any) => setEdges((eds) => addEdge(params, eds)),
    [setEdges],
  );
 
  return (
    <div style={{ width: '80vw', height: '50vh', padding: "20px", border: "2px black solid" }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
      />
    </div>
  );
}