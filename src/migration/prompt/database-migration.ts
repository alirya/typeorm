import OperationType from "./operation/operation";
import Callable from "@alirya/function/callable";
import Identity from "@alirya/function/identity";
import NoOp from "@alirya/function/no-op";
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