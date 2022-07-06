import {DataSource, EntityMetadata} from 'typeorm';
import EntityQueryMatch from './boolean/entity-query-match';
import {GenerateQuery} from './generate';
import ClassFromQueries from './string/class-from-queries';
import Callable from '@alirya/function/callable';
import Generate from './generate';
import PublicMigrationGenerateCommand from '../migration-generate-command/public-migration-generate-command';
import NoOp from '@alirya/function/no-op';
import TrimPrefixParameters from '@alirya/string/trim-prefix-parameters';

export default async function DataSourceGenerator(
    name: string,
    connection: DataSource,
    log : Callable<[string], void> = NoOp,
    extension : string = 'ts',
) : Promise<Generate> {

    extension = TrimPrefixParameters(extension, '.');

    const sqlInMemory = await connection.driver.createSchemaBuilder().log();

    if (!sqlInMemory.upQueries.length) {

        log(`No changes in database schema were found`);
    }

    // pretty up the query
    sqlInMemory.upQueries.forEach(upQuery => {
        upQuery.query = PublicMigrationGenerateCommand.prettifyQuery(upQuery.query);
    });
    sqlInMemory.downQueries.forEach(downQuery => {
        downQuery.query = PublicMigrationGenerateCommand.prettifyQuery(downQuery.query);
    });

    const upQueries = new Map(sqlInMemory.upQueries.entries());


    // generate data
    const queries = new Map<EntityMetadata, GenerateQuery[]>();
    const tables : string[] = [];
    for (const entityMetadata of connection.entityMetadatas) {

        queries.set(entityMetadata, []);
        tables.push(entityMetadata.tableName);
    }

    for (const [index, upQuery] of upQueries) {

        for (const entityMetadata of connection.entityMetadatas) {

            const generateds = queries.get(entityMetadata) as GenerateQuery[];

            if(EntityQueryMatch(upQuery.query, entityMetadata.tableName, tables)) {

                upQueries.delete(index);

                const timestamp = new Date().getTime() + index;

                const filename = `${timestamp}-${name}.${extension}`;

                const downQuery = sqlInMemory.downQueries[index];

                generateds.push({
                    name,
                    timestamp,
                    filename,
                    up : upQuery,
                    down : sqlInMemory.downQueries[index],
                    code : ClassFromQueries(name, timestamp, upQuery, downQuery)
                });

                break;
            }
        }
    }

    if(upQueries.size) {

        const query = [...upQueries.values()].map(query=>query.query).join('\r\n\r\n');

        throw new Error(`Unhandled ${upQueries.size} query, ${query}`);
    }

    return queries;

}
