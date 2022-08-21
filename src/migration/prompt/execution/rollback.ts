import {DataSource} from "typeorm";

export default function RollbackLast(connection : DataSource) : Promise<any> {

    return connection.undoLastMigration();
}
