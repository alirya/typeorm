import Register from '../register/register.js';
import Questions from "@axiona/prompt/questions/questions.js";
import Question from "@axiona/prompt/question/question.js";

export default class RegisterSlave implements Questions<Register> {

    public register : Question = {
        type: 'confirm',
        message: 'register another slave?',
        initial :  false,
    };

}
