import Event from "./event";
import Database from "../database";
import Callable from "../../../../function/dist/callable";
import {MysqlConnectionOptions} from "typeorm/driver/mysql/MysqlConnectionOptions";
import Config from "../../config/config";

export default class Standard implements Event {

    constructor(private callback : Callable<[string], void>) {
    }

    connectingError(database : Database, error : Error) {

        this.callback(`database connection Error ${this.connectionInfo(database)}\r\n${error}`);
    }

    protected connectionInfo(database : Database) : string {

        const info : string[] = [];

        const replication = (database.config as MysqlConnectionOptions|Config as Partial<MysqlConnectionOptions>).replication;

        if(replication) {

            info.push('master:' + replication.master.database);

            info.push('slaves:' + replication.slaves.map(config=>config.database).join(', '))

        } else {

            info.push(database.config.database as string);
        }

        return info.join(' ');
    }

    connecting(database : Database) {

        this.callback('database connecting to ' + this.connectionInfo(database));
    }

    connected(database : Database) {

        this.callback('database connected to ' + this.connectionInfo(database));
    }

    disconnecting(database : Database) {

        this.callback('database disconnecting to ' + this.connectionInfo(database));
    }

    disconnected(database : Database) {

        this.callback('database disconnected to ' + this.connectionInfo(database));
    }

    disconnectionError(database : Database, error : Error) {

        this.callback(`database disconnection Error ${this.connectionInfo(database)}\r\n${error}`);
    }


}