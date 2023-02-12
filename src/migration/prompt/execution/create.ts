import {EntitySchema} from "typeorm";
import Prompts from "prompts";
import Name from '../../generate/questions/name.js';
import Entities from '../../generate/questions/entities.js';
import {DataSource} from "typeorm";
import FromQuestion from "@alirya/prompt/prompt-object/array/from-question.js";
import Class from "@alirya/class/class.js";
import GenerateWrite from '../../generate/write.js';
import DataSourceGenerator from '../../generate/data-source-generator.js';
import Callable from "@alirya/function/callable.js";
import Generate from '../../generate/generate.js';
import NoOp from "@alirya/function/no-op.js";
import Identity from "@alirya/function/identity.js";
import Blank from '../../generate/blank.js';

export default function Create(
    connection : DataSource,
    entities : Map<Function | string | EntitySchema | Class, string>,
    path : Callable<[string], string> = Identity,
    log : Callable<[string], void> = NoOp,
    extension  = 'ts',
) : Promise<Generate> {

    const prompts = FromQuestion(new Name());

    return Prompts(prompts).then(async (data: {name:string})=>{

        const entity = FromQuestion(Entities(entities));

        return Prompts(entity).then(async (operation: {operation:Function | string | EntitySchema})=>{

            const metadata = connection.entityMetadatas.find(metadata=>metadata.target === operation.operation);

            if(metadata) {
                const generated = Blank(metadata, data.name, extension);
                return GenerateWrite(generated, (entity) => entities.get(entity) as string, path, log);
            } else {
                throw new Error('entity not found');
            }

        });
    });
}
