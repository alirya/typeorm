import {DataSource} from "typeorm";

export default function Migrate(connection : DataSource) : Promise<any> {

    return connection.runMigrations();
}
