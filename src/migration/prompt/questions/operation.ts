import Option from '../operation/option/option.js';
import OperationType from '../operation/operation.js';
import Question from "@alirya/prompt/question/question.js";
import Questions from "@alirya/prompt/questions/questions.js";

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
