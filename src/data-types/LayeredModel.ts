import {GORCNode} from "./GROCNodes";
import {Question} from "./QuestionNodes";

export type LayeredModel = {
    nodes: {
        [id: string]: Omit<GORCNode, "categories" | "subcategories" | "attributes" | "features"> & Child
    },
    questions: {
        [id: string]: Question & Child
    }
}

type Child = {
    pid: string | null;
}
