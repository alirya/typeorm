import Column from '../column';

type Infer<Type> = Type extends Column<any, infer As> ? As : never;

export default Infer;
