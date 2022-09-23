import {EntitySchema} from "typeorm";
import Prompts from "prompts";
import Name from "../../generate/questions/name";
import Entities from "../../generate/questions/entities";
import {DataSource} from "typeorm";
import FromQuestion from "@alirya/prompt/prompt-object/array/from-question";
import Class from "@alirya/class/class";
import GenerateWrite from "../../generate/write";
import DataSourceGenerator from "../../generate/data-source-generator";
import Callable from "@alirya/function/callable";
import Generate from "../../generate/generate";
import NoOp from "@alirya/function/no-op";
import Identity from "@alirya/function/identity";
import Blank from "../../generate/blank";

export default function Create(
    connection : DataSource,
    entities : Map<Function | string | EntitySchema | Class, string>,
    path : Callable<[string], string> = Identity,
    log : Callable<[string], void> = NoOp,
    extension : string = 'ts',
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
