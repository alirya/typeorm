import SqlError from "../mysql";
export default function InvalidRelation(value: any): value is SqlError;
