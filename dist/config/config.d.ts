import { ConnectionOptions } from "typeorm";
import { Object } from "ts-toolbelt";
declare type Config = Object.Writable<ConnectionOptions, 'entities' | 'subscribers' | 'migrations'>;
export default Config;
