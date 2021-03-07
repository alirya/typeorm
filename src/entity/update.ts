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

    const primary = entity[key];

    const detach : boolean = detaches.length !== 0;

    let extract : Extract<Entity, (keyof Entity)[]>|undefined;

    if(detach) {

        detaches.push(key);
        detaches = Unique(detaches);

        extract = new Extract(entity, detaches);
    }

    let promise : Promise<Entity>;

    const valid = NotEmpty(entity);

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

    if(extract) {

        return promise.finally(()=>{

            Object.assign(entity, (extract as Extract<Entity, (keyof Entity)[]>).return);
        })

    } else {

        return promise;
    }


}
