import {DataSource} from "typeorm";
import Connection from '../../../connection.js';
import Migration from '../../../../dist/migration/prompt/migration.js';
import {MethodParameters} from '@axiona/function/method.js';
import Database from '../../../../dist/database/database.js';



(async () => {

    const db : Database = Connection();
    const connection : DataSource = await db.connect();

    return  Migration(
        connection,
        db.config.entities,
        path=>path.replace(/[\\/]dist-spec[\\/]/, '/spec/'),
        console.log
    ).then(()=>process.exit(0));

})();

