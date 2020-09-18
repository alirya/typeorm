import {ConnectionOptions, createConnection} from "typeorm";
import ConfigSuffixJson from "@dikac/tn-filesystem/object/config-suffix-json";
import Children from "./children/children";
import Parent from "./parent/parent";
import GrandParent from "./grand-parent/grand-parent";
import {Required} from "utility-types";

let config = <Required<ConnectionOptions, 'entities'>>ConfigSuffixJson(__dirname + '/../database.json', '-dist');

config.entities.push(Children, Parent, GrandParent);

const Connection = createConnection(<ConnectionOptions>config);

export default Connection;
