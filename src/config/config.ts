import {DataSourceOptions} from "typeorm";
import {EntitySchema} from "typeorm";
import Class from "@alirya/class/class";

export default interface Config extends Omit<DataSourceOptions, 'entities'|'subscribers'|'migrations'> {

    /**
     * map entity and migration path
     */
    entities : Map<Function | string | EntitySchema | Class, string>;

}


