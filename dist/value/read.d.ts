import { Object, Union } from "ts-toolbelt";
import { EntityManager, ObjectType } from "typeorm";
import { FindOneOptions } from "typeorm/find-options/FindOneOptions";
import Value from "@dikac/t-value/value";
import { JoinOptions } from "typeorm/find-options/JoinOptions";
export default class Read<Entity> implements Readonly<Value<Promise<Entity>>>, FindOneOptions<Entity> {
    manager: EntityManager;
    entity: ObjectType<Entity>;
    relations: string[];
    select: (keyof Entity)[];
    where: Union.Exclude<Object.At<FindOneOptions<Entity>, 'where'>, string | undefined>;
    cache: Object.At<FindOneOptions<Entity>, 'cache'>;
    order: Object.At<FindOneOptions<Entity>, 'order'>;
    lock: Object.At<FindOneOptions<Entity>, 'lock'>;
    withDeleted: boolean;
    join?: JoinOptions;
    loadRelationIds?: boolean | {
        relations?: string[];
        disableMixedMap?: boolean;
    };
    loadEagerRelations?: boolean;
    constructor(manager: EntityManager, entity: ObjectType<Entity>);
    get option(): FindOneOptions<Entity>;
    lockOptimistic(version: number | Date): void;
    lockDirtyRead(): void;
    lockPessimistic(mode: "read" | "write" | "partial_write" | "write_or_fail"): void;
    get value(): Promise<Entity>;
}
