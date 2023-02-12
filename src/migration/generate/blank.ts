import Generate, {GenerateQuery} from './generate.js';
import {EntityMetadata} from "typeorm";
import {Query} from "typeorm/driver/Query.js";
import ClassFromQueries from './string/class-from-queries.js';
import {TrimPrefixParameters} from '@alirya/string/trim-prefix.js';

export default function Blank(entity: EntityMetadata, name: string, extension = 'ts') : Generate {

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