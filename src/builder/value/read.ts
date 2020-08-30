import {SelectQueryBuilder} from "typeorm";
import NotFound from "../../throwable/not-found";

export default function Read<Entity>(query : SelectQueryBuilder<Entity>) : Promise<Entity> {

    return query.getOne().then((entity)=> {

        if(entity) {

            return entity;
        }

        throw new NotFound(`record ${query.alias} not found`, query.getParameters())
    });
}
