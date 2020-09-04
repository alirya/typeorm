import SqlError from "../mysql";
export default function DuplicateEntry(value: any): value is SqlError;
