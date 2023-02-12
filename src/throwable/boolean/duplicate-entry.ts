import SqlError from '../mysql.js';
import Mysql from './mysql.js';
import Postgres from './postgres.js';

export default function DuplicateEntry(value : any) : value is SqlError {

    if(Mysql(value)) {

        return value.errno === 1062;
    }

    if(Postgres(value)) {

        return value.code === '23505';
    }

    return false;
}
