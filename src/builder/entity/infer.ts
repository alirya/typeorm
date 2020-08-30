import {QueryBuilder} from "typeorm";

type Infer<Type> = Type extends QueryBuilder<infer As> ? As : never;

export default Infer;
