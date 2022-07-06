import {Query} from 'typeorm/driver/Query';
import {EntityMetadata} from 'typeorm';

export interface GenerateQuery {

    /**
     * timestamp
     */
    timestamp: number;

    /**
     * name of migration
     */
    name: string;

    /**
     * file name with extension
     */
    filename: string;
    up: Query;
    down: Query;

    /**
     * full generated code
     */
    code: string;
}

type Generate<Extra extends {} = {}> = Map<EntityMetadata, (GenerateQuery & Extra)[]>;
export default Generate;

