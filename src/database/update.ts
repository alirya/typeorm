import {EntityManager, UpdateResult} from "typeorm";
import Updated from "../entity/boolean/updated";
import Unique from "@dikac/t-array/unique";
import OmitUndefined from "@dikac/t-object/omit-undefined";
import Extract from "@dikac/t-object/extract";
import NotEmpty from "@dikac/t-object/boolean/not-empty";
import NotFound from "../throwable/not-found";
import Name from "@dikac/t-object/string/name";
import NotUndefined from "@dikac/t-undefined/validatable/not-undefined";
import PrimaryKeyRequired from "../model/validatable/string/primary-key-required";


export default function Update<Entity extends object, PrimaryKey extends keyof Entity>(
    manager : EntityManager,
    entity : Entity,
    key : PrimaryKey,
    detaches : (keyof Entity)[] = []
) : Promise<Entity> {

    let validatable = NotUndefined(entity, (result)=>PrimaryKeyRequired(result, key));

    if(!validatable.valid) {

        throw new Error(validatable.message);
    }

    OmitUndefined(entity);

    let primary = entity[key];
    detaches.push(key);
    detaches = Unique(detaches);

    let extract = new Extract(entity, detaches);

    let valid = NotEmpty(entity);

    let promise : Promise<Entity>;


    if(!valid) {

        promise = Promise.resolve(entity);

    } else {

        promise = manager.getRepository(entity.constructor).update(primary, entity).then((result : UpdateResult)=>{

            if(!Updated(result, 1)) {

                throw new NotFound(`${primary} is not found for ${Name(entity)}`);
            }

            return entity;

        });
    }

    return promise.finally(()=>{

        Object.assign(entity, extract.return);
    })
}
