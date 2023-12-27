import Config from '../config.js';
import {DataSourceOptions} from "typeorm";
import { OmitParameters } from "@axiona/object/omit.js";

export default function FromConfig(config: Config) : DataSourceOptions {

    const entities = {
        entities : [...config.entities.keys()],
        migrations : [...config.entities.values()].map(path=>`${path}/*.js`),
    }

    return Object.assign({}, OmitParameters(config, 'entities'), entities) as DataSourceOptions;
}
