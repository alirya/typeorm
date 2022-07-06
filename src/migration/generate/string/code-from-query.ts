import {Query} from 'typeorm/driver/Query';
import PublicMigrationGenerateCommand from '../../migration-generate-command/public-migration-generate-command';

export default function CodeFromQuery(query : Query) : string {

    const escaped = query.query.replace(new RegExp('`', 'g'), '\\`');
    const parameter = PublicMigrationGenerateCommand.queryParams(query.parameters);

    return ('        await queryRunner.query(`' + escaped + '`' + parameter + ');');
}

