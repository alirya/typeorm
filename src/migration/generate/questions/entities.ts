import {PromptObject} from "prompts";
import StrictOmit from "@axiona/object/strict-omit.js";
import Questions from "@axiona/prompt/questions/questions.js";
import Question from '@axiona/prompt/question/question.js';
import Option from '../../prompt/operation/option/option.js';
import {EntitySchema} from "typeorm";
import Name from "@axiona/object/string/name.js";
import String from "@axiona/string/boolean/string.js";

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
