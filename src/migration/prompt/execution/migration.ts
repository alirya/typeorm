import {EntitySchema} from "typeorm/entity-schema/EntitySchema";
import Operation from "../questions/operation";
import Prompts from "prompts";
import OperationType from "../operation/operation";
import Option from "../operation/option/option";
import Write from "./write";
import {DataSource} from "typeorm/data-source/DataSource";
import FromQuestion from "@alirya/prompt/prompt-object/array/from-question";
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

    // const prompts = FromQuestion(new Operation());

    // const operation : OperationType = await Prompts(prompts) as OperationType

    switch (operation.operation) {

        case Option.GENERATE:
            return Write(connection, entities, path, log, extension);

        case Option.MIGRATE:
            return connection.runMigrations();

        case Option.ROLLBACK:
            return connection.undoLastMigration();

    }

}
