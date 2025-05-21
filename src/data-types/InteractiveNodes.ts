import {GORCNode} from "./GROCNodes";

export type InteractiveNodes = GORCNode & Questions & Position;

type Position = {
    position: {
        x: number;
        y: number;
    }
}

type Questions = {
    questions: Question[];
}

export type Question = {
    id: string;
    label: string;
    description: string;
}
