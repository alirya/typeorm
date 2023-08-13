import Environment from '../../../../dist/config/environment.js';
import ProcessEnv = NodeJS.ProcessEnv;
import Config from '../../../../dist/config/config.js';
import Create from '../../../../dist/config/create.js';
import {OmitParameters} from '@alirya/object/omit.js';

it('force console log', () => { spyOn(console, 'log').and.callThrough();});


const expectation : Config = Create({
    "type": "postgres",
    "replication": {
        "master": {
            "url": "",
            "host": "localhost",
            "port": 5432,
            "username": "postgres",
            "password": "root",
            "database": "ketikan-client-migration"
        },
        "slaves": [
            {
                "url": "",
                "host": "localhost",
                "port": 5432,
                "username": "postgres",
                "password": "root",
                "database": "ketikan-client-migration"
            },
            {
                "url": "",
                "host": "localhost",
                "port": 5432,
                "username": "postgres",
                "password": "root",
                "database": "ketikan-client-migration"
            }
        ]
    }
});

const environment = {

    DATABASE_TYPE: "postgres",

    DATABASE_REPLICATION_MASTER_URL : "",
    DATABASE_REPLICATION_MASTER_HOST : "localhost",
    DATABASE_REPLICATION_MASTER_PORT : 5432,
    DATABASE_REPLICATION_MASTER_USERNAME : "postgres",
    DATABASE_REPLICATION_MASTER_PASSWORD : "root",
    DATABASE_REPLICATION_MASTER_DATABASE : "ketikan-client-migration",

    DATABASE_REPLICATION_SLAVES_0_URL : "",
    DATABASE_REPLICATION_SLAVES_0_HOST : "localhost",
    DATABASE_REPLICATION_SLAVES_0_PORT : 5432,
    DATABASE_REPLICATION_SLAVES_0_USERNAME : "postgres",
    DATABASE_REPLICATION_SLAVES_0_PASSWORD : "root",
    DATABASE_REPLICATION_SLAVES_0_DATABASE : "ketikan-client-migration",

    database_replication_slaves_1_database : "ketikan-client-migration",
    database_replication_slaves_1_password : "root",
    database_replication_slaves_1_username : "postgres",
    database_replication_slaves_1_port : 5432,
    database_replication_slaves_1_host : "localhost",
    database_replication_slaves_1_url : "",

};

it('test', ()=>{

    expect(
        Environment(environment/* as ProcessEnv*/)
    ).toEqual(
        expectation
    )
})

