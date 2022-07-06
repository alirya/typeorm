import {PostgresConnectionOptions} from 'typeorm/driver/postgres/PostgresConnectionOptions';
import {O} from 'ts-toolbelt';
import {merge} from 'lodash';

export default function ReplicationMaster<Type extends PostgresConnectionOptions>(
    config: Type,
    prompt : (connection: Type)=>Promise<Type>
) : Promise<Type> {

    if(!config.replication) {

        (config as O.Writable<Type>).replication = {
            master : {},
            slaves : []
        };
    }

    const master = (config as O.Required<Type, 'replication'>).replication.master;

    return prompt((config as O.Required<Type, 'replication'>).replication.master as Type).then(result=>merge(master, result));
}
