import Prompts from "prompts";
import PostgresQuestions from "./questions/postgres";
import FromQuestion from "@alirya/prompt/prompt-object/array/from-question";
import FilterMissing from "@alirya/prompt/prompt-object/array/filter-missing";
import {PostgresConnectionOptions} from "typeorm/driver/postgres/PostgresConnectionOptions";

export default function PostgresOption(config: PostgresConnectionOptions) : Promise<PostgresConnectionOptions> {

    let missing = FilterMissing(FromQuestion(new PostgresQuestions(config)), config);

    return Prompts(missing) as Promise<PostgresConnectionOptions>;
}
