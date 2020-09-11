import SqlError from "../mysql";
export default function Mysql(value: any): value is SqlError;
export default function Mysql(value: SqlError): value is SqlError;
