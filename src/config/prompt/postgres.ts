import {PostgresConnectionOptions} from 'typeorm/driver/postgres/PostgresConnectionOptions';
import Replication from './replication.js';
import PostgresOption from './postgres-option.js';
import ReplicationSlave from './replication-slave.js';
import ReplicationMaster from './replication-master.js';
import {merge} from 'lodash';
import Filter from '@alirya/object/filter-recursive.js';


export default async function Postgres(config: PostgresConnectionOptions) : Promise<PostgresConnectionOptions> {

    return Replication().then(async replication=>{

        if(replication.replication) {

            await ReplicationMaster<PostgresConnectionOptions>(config as PostgresConnectionOptions, (config)=>PostgresOption(config));

            await ReplicationSlave<PostgresConnectionOptions>(config as PostgresConnectionOptions, (config)=>PostgresOption(config));

        } else {

            await PostgresOption(config).then(result=>merge(config, result));
        }

        return Filter<PostgresConnectionOptions>(config, (value)=>!!value) as PostgresConnectionOptions;

    });
}
