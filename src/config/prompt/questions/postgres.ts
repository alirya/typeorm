import Question from '@alirya/prompt/question/question';
import {PostgresConnectionOptions} from 'typeorm/driver/postgres/PostgresConnectionOptions';
import Questions from '@alirya/prompt/questions/questions';

export default class Postgres implements Questions<Omit<PostgresConnectionOptions, 'type'>> {

    public database : Question = {
        type: 'text',
        message: 'database name?',
        initial :  'database',
    };

    public url ?: Question = {
        type: 'text',
        message: 'url location (either use this or host)?',
    };

    public host?: Question = {
        type: 'text',
        message: 'host (either use this or url)?',
        initial :  'localhost',
    };

    public port : Question = {
        type: 'number',
        message: 'port?',
        initial :  5432,
    };

    public username : Question = {
        type: 'text',
        message: 'database user?',
        initial :  'postgres',
    };

    public password : Question = {
        type: 'text',
        message: 'database password?',
        initial :  'root',
    };

    constructor(config: Partial<PostgresConnectionOptions>) {

        if(config.host) {

            delete this.url;

        } else if(config.url) {

            delete this.host;
        }
    }

}
