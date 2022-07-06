import {DataSource} from 'typeorm/data-source/DataSource';

export default function RollbackLast(connection : DataSource) : Promise<any> {

    return connection.undoLastMigration();
}