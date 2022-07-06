import {VendorType} from './questions/vendor.js';
import Postgres from './postgres.js';
import {PostgresConnectionOptions} from 'typeorm/driver/postgres/PostgresConnectionOptions';
import Config from '../config.js';
import Create from '../create.js';
import {merge} from 'lodash';

export default function Vendor(
    config : VendorType|Promise<VendorType>,
) : Promise<Config> {

    return Promise.resolve(config)
        .then(config=>{

            switch (config.type) {
                case 'postgres':
                    return Postgres(config as PostgresConnectionOptions);


                default :
                    throw new Error(`${config.type} builder is not supported`);
            }
        })
        .then(result=>merge(config, result))
        .then(Create);

}
