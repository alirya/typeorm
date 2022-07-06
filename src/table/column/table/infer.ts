import Column from '../column.js';

type Infer<Type> = Type extends Column<infer As> ? As : never;

export default Infer;
