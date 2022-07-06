import Register from '../register/register';
import Questions from '@alirya/prompt/questions/questions';
import Question from '@alirya/prompt/question/question';

export default class RegisterSlave implements Questions<Register> {

    public register : Question = {
        type: 'confirm',
        message: 'register another slave?',
        initial :  false,
    };

}
