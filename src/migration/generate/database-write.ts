import Generate from "./generate";
import Callable from "@alirya/function/callable";
import Database from "../../database/database";
import MappedWrite from "./mapped-write";
import DataSourceGenerator from "./data-source-generator";
import NoOp from "@alirya/function/no-op";

export default async function DatabaseWrite(
    name : string,
    database: Database,
    path : Callable<[string], string> = (path: string)=>path,
    log : Callable<[string], void> = NoOp,
    extension : string = 'ts',
) : Promise<Generate> {

    const generate = await DataSourceGenerator(name, database.connection, log, extension);

    return MappedWrite(generate, database.config.entities, path, log)
}


