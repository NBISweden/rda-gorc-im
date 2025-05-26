import { useCallback } from "react";
import {
  ReactFlow,
  MiniMap,
  Controls,
  Node,
} from "@xyflow/react";
import { useTreeContext } from "../contexts/TreeContext";
import { CustomNode } from "./CustomNode";

import "@xyflow/react/dist/style.css";

const nodeTypes = { shape: CustomNode };

export const Tree = () => {
  const treeManager = useTreeContext();
  const nodes = treeManager.getNodes();
  const edges = treeManager.getEdges();

  const onNodeClick = useCallback((_event: unknown, node: Node) => {
    console.log(node)
  }, []);

  return (
    <>
      <div style={{ width: "100vw", height: "100vh" }}>
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodeClick={onNodeClick}
          fitView
          nodeTypes={nodeTypes}
          nodesDraggable={false}
          minZoom={0.1}
        >
          <MiniMap />
          <Controls />
        </ReactFlow>
      </div>
    </>
  );
};
