import Config from "./config";
import Create from "./create";
import {ParseAsyncParameters} from "@alirya/filesystem/read/parse-async";

export default function File(
    path : string,
    parser: (content: string) => Config | Promise<Config> = JSON.parse,
    defaults?: (error: Error, file: string) => Partial<Config> | Promise<Partial<Config>>
) : Promise<Partial<Config>> {

    return ParseAsyncParameters(path, parser, defaults).then(Create);

}
