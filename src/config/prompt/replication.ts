import Prompts from "prompts";
import FromQuestion from "@alirya/prompt/prompt-object/array/from-question.js";
import ReplicationQuestion, {ReplicationResult} from './questions/replication.js';

export default function Replication() : Promise<ReplicationResult> {

    return Prompts(FromQuestion(new ReplicationQuestion())) as Promise<ReplicationResult>;
}
