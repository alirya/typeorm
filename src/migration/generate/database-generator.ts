import Callable from "@alirya/function/callable";
import Generate from "./generate";
import Database from "../../database/database";
import DataSourceGenerator from "./data-source-generator";
import NoOp from "@alirya/function/no-op";

export default async function DatabaseGenerator(
    name: string,
    connection: Database,
    log : Callable<[string], void> = NoOp,
    extension : string = 'ts',
) : Promise<Generate> {

    return connection.connect().then(connection=>{

        return DataSourceGenerator(name, connection, log, extension)
    })
}

