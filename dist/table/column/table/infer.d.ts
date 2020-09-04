import Column from "../column";
declare type Infer<Type> = Type extends Column<infer As> ? As : never;
export default Infer;
