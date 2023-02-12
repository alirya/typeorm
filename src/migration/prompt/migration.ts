import OperationType from './operation/operation.js';
import ExecutionMigration from './execution/migration.js';
import {DataSource} from "typeorm";
import {EntitySchema} from "typeorm";
import Callable from "@alirya/function/callable.js";
import Identity from "@alirya/function/identity.js";
import NoOp from "@alirya/function/no-op.js";
import Prompt from './prompt.js';
import Const from "@alirya/function/const.js";

export default function Migration(
    connection : DataSource,
    entities : Map<Function | string | EntitySchema, string>,
    path : Callable<[string], string> = Identity,
    log : Callable<[string], void> = NoOp,
    extension  = 'ts',
) : Promise<OperationType> {

    return Prompt().then((data :  OperationType)=>{

        return ExecutionMigration(data, connection, entities, path, log, extension)
            .then(Const(data));
    })
}
