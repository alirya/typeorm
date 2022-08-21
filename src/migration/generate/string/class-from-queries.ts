import CodeFromQuery from "./code-from-query";
import PublicMigrationGenerateCommand from "../../migration-generate-command/public-migration-generate-command";
import {Query} from "typeorm/driver/Query";

export default function ClassFromQueries(
    name: string,
    timestamp : number,
    queryUp: Query,
    queryDown: Query,
) : string {

    const up = CodeFromQuery(queryUp);
    const down = CodeFromQuery(queryDown);

    return  PublicMigrationGenerateCommand.getTemplate(name, timestamp, [up], [down]);
}
