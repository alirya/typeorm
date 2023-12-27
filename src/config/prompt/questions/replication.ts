import {PromptObject} from "prompts";
import StrictOmit from "@axiona/object/strict-omit.js";
import Questions from "@axiona/prompt/questions/questions.js";

export interface ReplicationResult {
    replication : boolean
}

export default class Replication implements Questions<ReplicationResult> {

    public replication : StrictOmit<PromptObject, 'name'>  = {
        type: 'confirm',
        message: 'has replication?',
        initial :  false,
    };

}
