import {GORCNode, NodeId} from "./GROCNodes";

type ModelNode = Omit<GORCNode, "id">;

export type LayeredModel = Package & {
    nodes: {
        [id: string]: ModelNode;
    };
}

export type LayeredModelLayer = Package & {
    nodes: {
        [id: string]: ModelNode | Nothing;
    };
}

export type ThematicSlice = Package & {
    nodes: {
        nodeId: NodeId;
    }[];
}

type Package = {
    id: string;
    label: string;
    version: SemanticVersionString;
}

type Nothing = {type: "nothing"}

type SemanticVersionString = string;
