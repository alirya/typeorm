import OperationType from './operation/operation.js';
import Callable from "@axiona/function/callable.js";
import Identity from "@axiona/function/identity.js";
import NoOp from "@axiona/function/no-op.js";
import Database from '../../database/database.js';
import Migration from './migration.js';

export default function DatabaseMigration(
    database : Database,
    path : Callable<[string], string> = Identity,
    log : Callable<[string], void> = NoOp,
    extension  = 'ts',
) : Promise<OperationType> {

    return Migration(database.connection, database.config.entities, path, log, extension)
}
