import {EntityManager, UpdateResult} from "typeorm";
import Updated from "./boolean/updated";
import Unique from "@dikac/t-array/unique";
import OmitUndefined from "@dikac/t-object/omit-undefined";
import Extract from "@dikac/t-object/extract";
import NotEmpty from "@dikac/t-object/boolean/not-empty";
import NotFound from "../throwable/not-found";
import Name from "@dikac/t-object/string/name";
import PrimaryKeyRequired from "./assert/not-undefined";


export default function Update<Entity extends object>(
    manager : EntityManager,
    entity : Entity,
    key : keyof Entity,
    detaches : (keyof Entity)[] = []
) : Promise<Entity> {

    PrimaryKeyRequired<Entity, keyof Entity>(entity, key);

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
