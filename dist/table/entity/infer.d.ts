import Table from "../table";
declare type Infer<Type> = Type extends Table<infer As> ? As : never;
export default Infer;
