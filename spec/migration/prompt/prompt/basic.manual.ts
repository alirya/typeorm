import {DataSource} from "typeorm/data-source/DataSource";
import Connection from "../../../connection";
import Migration from "../../../../dist/migration/prompt/migration";
import {MethodParameters} from "../../../../../function/dist/method";
import Database from "../../../../dist/database/database";



(async () => {

    let db : Database = Connection();
    let connection : DataSource = await db.connect();

    return  Migration(
        connection,
        db.config.entities,
        path=>path.replace(/[\\/]dist-spec[\\/]/, '/spec/'),
        console.log
    ).then(()=>process.exit(0));

})();

