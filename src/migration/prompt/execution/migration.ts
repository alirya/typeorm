import {EntitySchema} from "typeorm";
import OperationType from "../operation/operation";
import Option from "../operation/option/option";
import Write from "./write";
import Create from "./create";
import {DataSource} from "typeorm";
import Callable from "@alirya/function/callable";
import Identity from "@alirya/function/identity";
import NoOp from "@alirya/function/no-op";

export default async function Migration(
    operation : OperationType,
    connection : DataSource,
    entities : Map<Function | string | EntitySchema, string>,
    path : Callable<[string], string> = Identity,
    log : Callable<[string], void> = NoOp,
    extension : string = 'ts',
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
