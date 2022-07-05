import {DataSource} from "typeorm/data-source/DataSource";

export default function Migrate(connection : DataSource) : Promise<any> {

    return connection.runMigrations();
}