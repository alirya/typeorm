import Table from '../table.js';

type Infer<Type> = Type extends Table<infer As> ? As : never;

export default Infer;
