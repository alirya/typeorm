import Config from './config.js';
import File from './file.js';
import Environment from './environment.js';
import {merge} from 'lodash';
import Create from './create.js';
import Constant from '@alirya/function/constant.js';

/**
 *
 * @param file
 * @param process
 * @param initial
 * @param parser
 * @constructor
 */
export default function Auto(
    file: string|undefined = undefined,
    process: Record<string, any> = {},
    initial: Partial<Config> = {},
    parser: (content: string) => Config | Promise<Config> = JSON.parse,
/*    immutable: Partial<Config> = {},*/
) : Promise<Config> {

    // initial = Create(initial);

    return Promise.resolve(file ? File(file, parser, Constant({})) : {})
        .then(config=>{

            return merge(initial, config);

        })
        .then(config=>{

            return merge(config, Environment(process)) as Config;

        }).then(Create)
        /*.then(config=>{

            return merge(config, immutable);
        })*/;
}
