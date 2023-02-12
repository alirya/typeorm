import {EntityManager, ObjectType, UpdateResult} from 'typeorm';
import Updated from './boolean/updated.js';
import { UniqueParameters } from '@alirya/array/unique.js';
import OmitUndefined from '@alirya/object/omit-undefined.js';
import {ExtractParameters, ExtractReturn} from '@alirya/object/extract.js';
import NotEmpty from '@alirya/object/boolean/not-empty.js';
import NotFound from '../throwable/not-found.js';
import Name from '@alirya/object/string/name.js';
import PrimaryKeyRequired from './assert/not-undefined.js';
import {QueryDeepPartialEntity} from 'typeorm/query-builder/QueryPartialEntity.js';

export default function Update<Entity extends object>(
    manager : EntityManager,
    data : Entity,
    key : keyof Entity,
    entity ?: ObjectType<Entity>,
    detaches : (keyof Entity)[] = []
) : Promise<Entity> {

    PrimaryKeyRequired<Entity, keyof Entity>(data, key);

    OmitUndefined(data);

    const primary = data[key];

    const detach : boolean = detaches.length !== 0;

    let extract : ExtractReturn<Entity, (keyof Entity)[]>|undefined;

    if(detach) {

        detaches.push(key);
        detaches = UniqueParameters(detaches);

        extract = ExtractParameters(data, detaches);
    }

    let promise : Promise<Entity>;

    const valid = NotEmpty(data);

    if(!valid) {

        promise = Promise.resolve(data);

    } else {

        // TODO FIX ANY TYPE
        promise = manager.getRepository(entity || data.constructor).update(primary as any, data as QueryDeepPartialEntity<Entity>).then((result : UpdateResult)=>{

            if(!Updated(result, 1)) {

                throw new NotFound(`${primary} is not found for ${Name(data)}`);
            }

            return data;

        });
    }

    if(extract) {

        return promise.finally(()=>{

            Object.assign(data, (extract as ExtractReturn<Entity, (keyof Entity)[]>).result);
        });

    } else {

        return promise;
    }


}
