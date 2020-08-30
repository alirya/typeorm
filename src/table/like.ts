import {QueryBuilder, WhereExpression} from "typeorm";
import Padding from "@dikac/t-string/padding/padding";
import AffixCharacter from "@dikac/t-string/affix-character";

export default function Like<
    Entity,
    Builder extends QueryBuilder<Entity> & WhereExpression
>(
    query : Builder,
    column : string,
    parameter : string,
    value : string,
    padding : Padding|undefined
) : Builder {

    if(padding) {

        value = AffixCharacter(value, '%', padding);
    }

    return query.andWhere(`${column} LIKE :${parameter}`, {[parameter]:value});
}
