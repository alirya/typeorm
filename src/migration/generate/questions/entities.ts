import {PromptObject} from "prompts";
import StrictOmit from "@alirya/object/strict-omit";
import Questions from "@alirya/prompt/questions/questions";
import Question from '@alirya/prompt/question/question';
import Option from "../../prompt/operation/option/option";
import {EntitySchema} from "typeorm";
import Name from "@alirya/object/string/name";
import String from "@alirya/string/boolean/string";

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
