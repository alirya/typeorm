import {PromptObject} from "prompts";
import StrictOmit from "@alirya/object/strict-omit";
import Questions from "@alirya/prompt/questions/questions";

export default class Name implements Questions<{name:string}> {

    public name : StrictOmit<PromptObject, 'name'> = {
        type: 'text',
        message: 'migration name?',
        initial :  'newMigration',
        validate: value => value.match(/[^a-zA-Z]/) ? `only alphabet allowed` : true
    };


}
