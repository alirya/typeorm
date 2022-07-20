import Prompts from "prompts";
import FromQuestion from "@alirya/prompt/prompt-object/array/from-question";
import Operation from "./questions/operation";
import OperationType from "./operation/operation";

export default function Prompt() : Promise<OperationType> {

    return Prompts(
        FromQuestion(new Operation())
    ) as Promise<OperationType>
}