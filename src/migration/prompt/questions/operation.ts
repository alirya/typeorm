import Option from "../operation/option/option";
import OperationType from "../operation/operation";
import Question from "@alirya/prompt/question/question";
import Questions from "@alirya/prompt/questions/questions";

export default class Operation implements Questions<OperationType> {

    public operation : Question = {
        type: 'select',
        message: 'migration operation?',
        choices: Object.entries(Option).map(([key, value])=>{
            return { title: value, value: value }
        }),
        initial : 0
    }
}
