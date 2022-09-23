import Generate, {GenerateQuery} from "./generate";
import {EntityMetadata} from "typeorm";
import {Query} from "typeorm/driver/Query";
import ClassFromQueries from "./string/class-from-queries";
import {TrimPrefixParameters} from "../../../../string/dist/trim-prefix";

export default function Blank(entity: EntityMetadata, name: string, extension: string = 'ts') : Generate {

    const map : Map<EntityMetadata, GenerateQuery[]> = new Map<EntityMetadata, GenerateQuery[]>()

    extension = TrimPrefixParameters(extension, '.')

    const timestamp = new Date().getTime();

    const filename = `${timestamp}-${name}.${extension}`;

    const up = new Query('');
    const down = new Query('');

    map.set(entity, [{
        name,
        timestamp,
        filename,
        up,
        down,
        code : ClassFromQueries(name, timestamp, up, down)
    }]);

    return map;
}