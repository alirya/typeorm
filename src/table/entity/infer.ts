import Table from "../table";

type Infer<Type> = Type extends Table<infer As> ? As : never;

export default Infer;
