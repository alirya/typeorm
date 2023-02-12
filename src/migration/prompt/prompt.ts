import Prompts from "prompts";
import FromQuestion from "@alirya/prompt/prompt-object/array/from-question.js";
import Operation from './questions/operation.js';
import OperationType from './operation/operation.js';

export default function Prompt() : Promise<OperationType> {

    return Prompts(
        FromQuestion(new Operation())
    ) as Promise<OperationType>
}