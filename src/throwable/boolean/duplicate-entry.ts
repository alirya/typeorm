import SqlError from '../mysql';
import Mysql from './mysql';
import Postgres from './postgres';

export default function DuplicateEntry(value : any) : value is SqlError {

    if(Mysql(value)) {

        return value.errno === 1062;
    }

    if(Postgres(value)) {

        return value.code === '23505';
    }

    return false;
}
