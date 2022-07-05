import Config from "./config";
import File from "./file";
import Environment from "./environment";
import ProcessEnv = NodeJS.ProcessEnv;
import {merge} from "lodash";
import Create from "./create";
import Constant from "../../../function/dist/constant";

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
