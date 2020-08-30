import {ConnectionOptions} from "typeorm";
import {Object} from "ts-toolbelt";


type Config = Object.Writable<ConnectionOptions, 'entities'|'subscribers'|'migrations'>;
export default Config;
