import {PromptObject} from 'prompts';
import StrictOmit from '@alirya/object/strict-omit';
import Questions from '@alirya/prompt/questions/questions';

export interface ReplicationResult {
    replication : boolean;
}

export default class Replication implements Questions<ReplicationResult> {

    public replication : StrictOmit<PromptObject, 'name'>  = {
        type: 'confirm',
        message: 'has replication?',
        initial :  false,
    };

}