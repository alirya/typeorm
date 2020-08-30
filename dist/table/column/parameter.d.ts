import Table from "../table";
import Infer from "../entity/infer";
import BaseParameter from "@dikac/t-function/parameter/parameter";
import Standard from "./standard";
export default class Parameter<TableType extends Table = Table> extends Standard<TableType> implements BaseParameter {
    readonly parameter: string;
    constructor(table: TableType, key: keyof Infer<TableType>);
}
