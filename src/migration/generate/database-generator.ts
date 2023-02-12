import Callable from "@alirya/function/callable.js";
import Generate from './generate.js';
import Database from '../../database/database.js';
import DataSourceGenerator from './data-source-generator.js';
import NoOp from "@alirya/function/no-op.js";

export default async function DatabaseGenerator(
    name: string,
    connection: Database,
    log : Callable<[string], void> = NoOp,
    extension  = 'ts',
) : Promise<Generate> {

    return connection.connect().then(connection=>{

        return DataSourceGenerator(name, connection, log, extension)
    })
}

