import Config from "../config";
import {DataSourceOptions} from "typeorm";
import { OmitParameters } from "@alirya/object/omit";

export default function FromConfig(config: Config) : DataSourceOptions {

    const entities = {
        entities : [...config.entities.keys()],
        migrations : [...config.entities.values()].map(path=>`${path}/*.js`),
    }

    return Object.assign({}, OmitParameters(config, 'entities'), entities) as DataSourceOptions;
}
