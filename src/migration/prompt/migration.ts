import OperationType from "./operation/operation";
import ExecutionMigration from "./execution/migration";
import {DataSource} from "typeorm";
import {EntitySchema} from "typeorm";
import Callable from "@alirya/function/callable";
import Identity from "@alirya/function/identity";
import NoOp from "@alirya/function/no-op";
import Prompt from "./prompt";
import Const from "@alirya/function/const";

export default function Migration(
    connection : DataSource,
    entities : Map<Function | string | EntitySchema, string>,
    path : Callable<[string], string> = Identity,
    log : Callable<[string], void> = NoOp,
    extension : string = 'ts',
) : Promise<OperationType> {

    return Prompt().then((data :  OperationType)=>{

        return ExecutionMigration(data, connection, entities, path, log, extension)
            .then(Const(data));
    })
}
