import {EntitySchema} from "typeorm";
import OperationType from '../operation/operation.js';
import Option from '../operation/option/option.js';
import Write from './write.js';
import Create from './create.js';
import {DataSource} from "typeorm";
import Callable from "@axiona/function/callable.js";
import Identity from "@axiona/function/identity.js";
import NoOp from "@axiona/function/no-op.js";

export default async function Migration(
    operation : OperationType,
    connection : DataSource,
    entities : Map<Function | string | EntitySchema, string>,
    path : Callable<[string], string> = Identity,
    log : Callable<[string], void> = NoOp,
    extension  = 'ts',
) : Promise<any> {

    switch (operation.operation) {

        case Option.GENERATE:
            return Write(connection, entities, path, log, extension);

        case Option.MIGRATE:
            return connection.runMigrations();

        case Option.ROLLBACK:
            return connection.undoLastMigration();

        case Option.CREATE:
            return Create(connection, entities, path, log, extension);
    }

}
