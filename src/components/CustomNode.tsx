import { Handle, Position } from '@xyflow/react';

export function CustomNode({ data, isConnectable }: any) {
 
  return (
    <div className="text-updater-node" style={{position: "relative"}}>
      <Handle
        type="target"
        position={Position.Top}
        isConnectable={isConnectable}
      />
      <div style={{position: "relative", width: "200px", textAlign: "center", padding: "20px", backgroundColor: "rgba(255,255,255,0.8)"}}>
        <img src={data.img} style={{width: "30px", height: "30px", position: "absolute", top: "-15px", left: "calc(50% - 15px)"}}></img>
        <label htmlFor="text">{data.label}</label>
      </div>
      <Handle
        type="source"
        position={Position.Top}
        id="a"
        isConnectable={isConnectable}
      />
    </div>
  );
}
