import {PromptObject} from "prompts";
import StrictOmit from "@alirya/object/strict-omit.js";
import Questions from "@alirya/prompt/questions/questions.js";
import Question from '@alirya/prompt/question/question.js';
import Option from '../../prompt/operation/option/option.js';
import {EntitySchema} from "typeorm";
import Name from "@alirya/object/string/name.js";
import String from "@alirya/string/boolean/string.js";

export default function Entities(
    entities: Map<Function | string | EntitySchema, string>
) : Questions<{operation:string}>  {

    return {
        operation :  {
            type: 'select',
            message: 'migration operation?',
            choices: Array.from(entities).map(([key, value])=>{
                return { title: String(key) ? key : Name(key), value: key }
            }),
            initial : 0
        }
    }
}
