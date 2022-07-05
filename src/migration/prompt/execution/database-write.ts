import Callable from "@alirya/function/callable";
import GenerateType from "../../generate/generate";
import NoOp from "@alirya/function/no-op";
import Identity from "@alirya/function/identity";
import Database from "../../../database/database";
import Write from "./write";

export default function DatabaseWrite(
    database : Database,
    path : Callable<[string], string> = Identity,
    log : Callable<[string], void> = NoOp,
    extension : string = 'ts',
) : Promise<GenerateType> {

    return Write(database.connection, database.config.entities, path, log, extension)
}
