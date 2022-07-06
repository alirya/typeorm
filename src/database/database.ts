import {DataSource} from 'typeorm';
import Config from '../config/config.js';


export default interface Database {

    readonly connection : DataSource;
    config : Config;
    connect() : Promise<DataSource>;
    disconnect() : Promise<void>;
}
