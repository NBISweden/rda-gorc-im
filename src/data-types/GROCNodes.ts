export type GORCTree<T extends GORCNode | QuestionNode> = {
    node: T,
    children: GORCTree<T>[]
}

export type GORCNode = IdentifiableEntity & {
    type: (
        "essential-element"
        | "category"
        | "subcategory"
        | "attribute"
        | "feature"
        | "kpi"
    );
};

export type QuestionNode = {
    type: "question";
    id: NodeId;
    parentId: NodeId;
    label: string;
    description: string;
}

type IdentifiableEntity = {
    id: NodeId;
    parentId: NodeId;
    name: {
        shortName: string;
        longName: string;
    };
    description: string;
    examples: string[];
    sources: Source[];
    considerationLevel: ConsiderationLevel;
    implementation?: Implementation;
}

type Source = {
    name: string;
    url: string;
}

type ConsiderationLevel = "core" | "desirable" | "optional";

type Implementation = unknown;

export type NodeId = string | null;

export type QuestionId = string;
