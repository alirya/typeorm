import {MigrationGenerateCommand} from 'typeorm/commands/MigrationGenerateCommand';


export default class PublicMigrationGenerateCommand extends MigrationGenerateCommand {

    public static prettifyQuery(query: string) {

        return super.prettifyQuery(query);
    }

    public static queryParams(parameters: any[] | undefined) {

        return super.queryParams(parameters);
    }

    public static getTemplate(name: string, timestamp: number, upSqls: string[], downSqls: string[]) {

        return super.getTemplate(name, timestamp, upSqls, downSqls);
    }
}