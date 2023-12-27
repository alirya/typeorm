import {EntitySchema} from "typeorm";
import Prompts from "prompts";
import Name from '../../generate/questions/name.js';
import {DataSource} from "typeorm";
import FromQuestion from "@axiona/prompt/prompt-object/array/from-question.js";
import Class from "@axiona/class/class.js";
import GenerateWrite from '../../generate/write.js';
import DataSourceGenerator from '../../generate/data-source-generator.js';
import Callable from "@axiona/function/callable.js";
import Generate from '../../generate/generate.js';
import NoOp from "@axiona/function/no-op.js";
import Identity from "@axiona/function/identity.js";

export default function Write(
    connection : DataSource,
    entities : Map<Function | string | EntitySchema | Class, string>,
    path : Callable<[string], string> = Identity,
    log : Callable<[string], void> = NoOp,
    extension  = 'ts',
) : Promise<Generate> {

    const prompts = FromQuestion(new Name());

    return Prompts(prompts).then(async (data: {name:string})=>{

        const generated = await DataSourceGenerator(data.name, connection, log, extension);
        return GenerateWrite(generated, (entity) => entities.get(entity) as string, path, log);

    });
}
