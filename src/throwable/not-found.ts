import {EntityNotFoundError} from "typeorm/error/EntityNotFoundError";
import {ObjectType} from "typeorm/common/ObjectType";
import {EntitySchema} from "typeorm";

export default class NotFound<Value> extends EntityNotFoundError {

    constructor(
        entityClass: ObjectType<any> | EntitySchema<any> | string = 'record not found',
        criteria: any = null,
        readonly value ?: Value
    ) {

        super(entityClass, criteria);
    }
}
