import Prompts from "prompts";
import PostgresQuestions from './questions/postgres.js';
import FromQuestion from "@axiona/prompt/prompt-object/array/from-question.js";
import FilterMissing from "@axiona/prompt/prompt-object/array/filter-missing.js";
import {PostgresConnectionOptions} from "typeorm/driver/postgres/PostgresConnectionOptions.js";

export default function PostgresOption(config: PostgresConnectionOptions) : Promise<PostgresConnectionOptions> {

    const missing = FilterMissing(FromQuestion(new PostgresQuestions(config)), config);

    return Prompts(missing) as Promise<PostgresConnectionOptions>;
}
