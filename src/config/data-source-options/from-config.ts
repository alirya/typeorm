import Config from "../config";
import {DataSourceOptions} from "typeorm/data-source/DataSourceOptions";
import Omit from "@alirya/object/omit-parameters";

export default function FromConfig(config: Config) : DataSourceOptions {

    const entities = {
        entities : [...config.entities.keys()],
        migrations : [...config.entities.values()].map(path=>`${path}/*.js`),
    }

    return Object.assign({}, Omit(config, 'entities'), entities) as DataSourceOptions;
}