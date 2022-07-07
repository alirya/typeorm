import Config from "./config";
import {promises} from "fs";
import Create from "./create";
import {ParseAsyncParameters} from "../../../filesystem/dist/read/parse-async";

export default function File(
    path : string,
    parser: (content: string) => Config | Promise<Config> = JSON.parse,
    defaults?: (error: Error, file: string) => Partial<Config> | Promise<Partial<Config>>
) : Promise<Partial<Config>> {

    return ParseAsyncParameters(path, parser, defaults).then(Create);

}
