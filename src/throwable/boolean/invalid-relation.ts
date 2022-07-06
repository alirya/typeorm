import SqlError from '../mysql.js';
import Mysql from './mysql.js';

export default function InvalidRelation(value : any) : value is SqlError {

    if(Mysql(value)) {

        return value.errno === 1452;
    }

    return false;
}
