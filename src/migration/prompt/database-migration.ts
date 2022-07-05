import Prompts from "prompts";
import FromQuestion from "../../../../prompt/dist/prompt-object/array/from-question";
import Operation from "./questions/operation";
import OperationType from "./operation/operation";
import ExecutionWrite from "./execution/write";
import Migrate from "./execution/migrate";
import ExecutionMigration from "./execution/migration";
import {DataSource} from "typeorm/data-source/DataSource";
import {EntitySchema} from "typeorm/entity-schema/EntitySchema";
import Callable from "../../../../function/dist/callable";
import Identity from "../../../../function/dist/identity";
import NoOp from "../../../../function/dist/no-op";
import Prompt from "./prompt";
import Const from "../../../../function/dist/const";
import Database from "../../database/database";
import Migration from "./migration";

export default function DatabaseMigration(
    database : Database,
    path : Callable<[string], string> = Identity,
    log : Callable<[string], void> = NoOp,
    extension : string = 'ts',
) : Promise<OperationType> {

    return Migration(database.connection, database.config.entities, path, log, extension)
}