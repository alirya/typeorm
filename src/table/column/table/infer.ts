import Column from "../column";

type Infer<Type> = Type extends Column<infer As> ? As : never;

export default Infer;
