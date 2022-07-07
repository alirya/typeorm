import Config from "./config";
import {JsonAsyncParameters} from "../../../filesystem/dist/write/json-async";
import Const from "../../../function/dist/const";
import Filter from "../../../object/dist/filter";

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