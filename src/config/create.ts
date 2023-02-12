import Config from './config.js';
import {EntitySchema} from "typeorm";
import Class from "@alirya/class/class.js";
import {DataSourceOptions} from "typeorm";
import IsMap from "@alirya/map/boolean/map.js";

export default function Create(config : Partial<Config>|DataSourceOptions) : Config {

    if(!config.entities || !IsMap(config.entities)) {

        const entities = new Map<Function | string | EntitySchema | Class, string>();

        return Object.assign(config, {entities}) as Config;
    }

    return config as Config;

}
