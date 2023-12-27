import Config from './config.js';
import {EnvironmentParameters} from "@axiona/object/environment.js";
import Last from "@axiona/array/value/value/last.js";
import Create from './create.js';
import {InflateParameter} from '@axiona/object/inflate.js';

export type EnvironmentPrefix = 'DATABASE'|'database'|'DB'|'db';
/**
 * parse data from ENVIRONMENT variable
 *
 * this parse value from CONFIG key as object, then
 * use {@see Mapping} for each key, meaning if both set value from CONFIG will be replaced
 *
 * @param object
 * @param prefix
  */
export default function Environment(object: Record<string, any>, prefix: EnvironmentPrefix = 'DATABASE') : Partial<Config> {

    return Create(InflateParameter({
        object,
        prefix,
        keys: ({keys, key, value}) => {

            return keys.map(key=>key.toLowerCase());
        },
        value: ({keys, key, value}) => {

            // last
            switch(Last(keys)) {
                case 'port' : return parseInt(value);
            }

            return value;
        }
    }));
}
