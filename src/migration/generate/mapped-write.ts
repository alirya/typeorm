import Generate from './generate.js';
import Callable from "@alirya/function/callable.js";
import Class from "@alirya/class/class.js";
import Write from './write.js';
import {EntitySchema} from "typeorm";
import NoOp from "@alirya/function/no-op.js";


export default async function MappedWrite(
    generate: Generate,
    directory : Map<Function | string | EntitySchema | Class, string>,
    path : Callable<[string], string> = (path: string)=>path,
    log : Callable<[string], void> = NoOp
) : Promise<Generate<{absolute:string}>> {

    return Write(generate, (entity)=>directory.get(entity) as string, path, log)
}


