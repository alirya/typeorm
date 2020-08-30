import {Connection as OrmConnection, ConnectionOptions, createConnection} from "typeorm";
import ConfigSuffixJson from "@dikac/tn-filesystem/object/config-suffix-json";


let config = ConfigSuffixJson(__dirname + '/../database.json', '-dist');

const Connection =  createConnection(<ConnectionOptions>config).then((connection : OrmConnection) => {
    return connection;
});

export default Connection;
