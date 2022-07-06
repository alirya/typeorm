import Config from './config.js';
import {EnvironmentParameters} from '@alirya/object/environment.js';
import Last from '@alirya/array/value/value/last.js';
import Create from './create.js';

export type EnvironmentPrefix = 'DATABASE'|'database'|'DB'|'db';
/**
 * parse data from ENVIRONMENT variable
 *
 * this parse value from CONFIG key as object, then
 * use {@see Mapping} for each key, meaning if both set value from CONFIG will be replaced
 *
 * @param process
 * @param prefix
  */
export default function Environment(process: Record<string, any>, prefix: EnvironmentPrefix = 'DATABASE') : Partial<Config> {

   return EnvironmentParameters(process, prefix, (keys, key, value) => {

       // last
       switch(Last(keys)) {
           case 'port' : return parseInt(value);
       }

       return Create(value);
   });
}
