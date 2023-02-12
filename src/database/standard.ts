import Database from './database.js';
import Config from '../config/config.js';
import {DataSourceOptions} from "typeorm";
import FromConfig from '../config/data-source-options/from-config.js';
import Create from '../config/create.js';
import {DataSource} from "typeorm";

export default class Standard implements Database {

    #connection ?: DataSource;
    config : Config;
    /**
     * Entity and migration directory
     */

    constructor(config : Config) {

        this.config = Create(config);
    }

    connect() : Promise<DataSource> {

        if(this.#connection && this.#connection.isInitialized) {

            return Promise.resolve(this.#connection);
        }

        const config = FromConfig(this.config);

        this.#connection = new DataSource(<DataSourceOptions>config);

        return this.#connection.initialize().then((connection : DataSource) => {

            return this.#connection = connection;
        });
    }

    get connection() : DataSource {

        if(this.#connection) {

            return this.#connection;
        }

        throw new Error('database is not connected')

    }

    disconnect() : Promise<void> {

        if(!this.#connection) {

            return Promise.resolve();
        }

        return this.#connection.destroy().then(()=>{

            this.#connection = undefined;

            return undefined;

        });

    }
}

