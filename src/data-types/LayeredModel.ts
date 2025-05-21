import {GORCNode} from "./GROCNodes";
import {Question} from "./QuestionNodes";

type ModelNode = Omit<GORCNode, "id" | "categories" | "subcategories" | "attributes" | "features"> & Child;

export type LayeredModel = {
    nodes: {
        [id: string]: ModelNode
    },
    questions: {
        [id: string]: QuestionNode
    }
}

export type LayeredModelLayer = {
    nodes: {
        [id: string]: ModelNode | Nothing
    },
    questions: {
        [id: string]: QuestionNode | Nothing
    }
}

type QuestionNode = Omit<Question, "id"> & {type: "question"} & Child;

type Nothing = {type: "nothing"}

type Child = {
    pid: string | null;
}
