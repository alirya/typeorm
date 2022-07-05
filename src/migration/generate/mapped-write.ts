import Generate from "./generate";
import Callable from "@alirya/function/callable";
import Class from "@alirya/class/class";
import Write from "./write";
import {EntitySchema} from "typeorm/entity-schema/EntitySchema";
import NoOp from "@alirya/function/no-op";


export default async function MappedWrite(
    generate: Generate,
    directory : Map<Function | string | EntitySchema | Class, string>,
    path : Callable<[string], string> = (path: string)=>path,
    log : Callable<[string], void> = NoOp
) : Promise<Generate<{absolute:string}>> {

    return Write(generate, (entity)=>directory.get(entity) as string, path, log)
}


