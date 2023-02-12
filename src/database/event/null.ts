import Event from './event.js';
import Database from '../database.js';

export default class Null implements Event {

    connectingError(database : Database, error : Error) {}
    connecting(database : Database) {}
    connected(database : Database) {}
    disconnecting(database : Database) {}
    disconnected(database : Database) {}
    disconnectionError(database : Database, error : Error) {}

}