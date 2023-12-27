import Config from './config.js';
import {JsonAsyncParameters} from "@axiona/filesystem/write/json-async.js";
import Const from "@axiona/function/const.js";
import Filter from "@axiona/object/filter.js";

export default function JsonWrite(file : string, config : Config) : Promise<Config> {

    config = Filter(config, (value, key) => {

        switch (true) {
            case value === "" :
            case key === "entities" :
                return false;
            default :
                return true;
        }

    }) as Config;

    return JsonAsyncParameters(file, config, 2).then(Const(config))
}
