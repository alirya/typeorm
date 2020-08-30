import { EntityNotFoundError } from "typeorm/error/EntityNotFoundError";
import { ObjectType } from "typeorm/common/ObjectType";
import { EntitySchema } from "typeorm";
export default class NotFound<Value> extends EntityNotFoundError {
    readonly value?: Value | undefined;
    constructor(entityClass?: ObjectType<any> | EntitySchema<any> | string, criteria?: any, value?: Value | undefined);
}
