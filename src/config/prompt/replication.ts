import Prompts from "prompts";
import FromQuestion from "@alirya/prompt/prompt-object/array/from-question";
import ReplicationQuestion, {ReplicationResult} from "./questions/replication";

export default function Replication() : Promise<ReplicationResult> {

    return Prompts(FromQuestion(new ReplicationQuestion())) as Promise<ReplicationResult>;
}
