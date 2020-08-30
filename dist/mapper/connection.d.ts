import { EntityManager, SelectQueryBuilder, Connection as OrmConnection } from "typeorm";
import ColumnInfer from "../table/entity/infer";
import Standard from "./standard";
import Table from "../table/table";
export default class Connection<ColumnType extends Table> extends Standard<SelectQueryBuilder<ColumnInfer<ColumnType>>, ColumnType> {
    constructor(column: ColumnType, connection: EntityManager | OrmConnection);
}
