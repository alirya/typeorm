import Generate from './generate.js';
import Callable from "@alirya/function/callable.js";
import Database from '../../database/database.js';
import MappedWrite from './mapped-write.js';
import DataSourceGenerator from './data-source-generator.js';
import NoOp from "@alirya/function/no-op.js";

export default async function DatabaseWrite(
    name : string,
    database: Database,
    path : Callable<[string], string> = (path: string)=>path,
    log : Callable<[string], void> = NoOp,
    extension  = 'ts',
) : Promise<Generate> {

    const generate = await DataSourceGenerator(name, database.connection, log, extension);

    return MappedWrite(generate, database.config.entities, path, log)
}


