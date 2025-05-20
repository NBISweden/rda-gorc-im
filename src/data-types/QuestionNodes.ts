import {GORCNode} from "./GROCNodes";

export type QuestionNode = GORCNode & Questions;

type Questions = {
    questions: Question[];
}

export type Question = {
    id: string;
    label: string;
    description: string;
}
