import {ConnectionOptions, createConnection} from 'typeorm';
import Children from './children/children';
import Parent from './parent/parent';
import Fs from 'fs';
import GrandParent from './grand-parent/grand-parent';
import {Required} from 'utility-types';


const configPath = __dirname + '/../database.json';

if(!Fs.existsSync(configPath)) {

    Fs.copyFileSync(
        __dirname + '/../database.json-dist',
        configPath
    );
}

let config = <Required<ConnectionOptions, 'entities'>>JSON.parse(Fs.readFileSync(configPath).toString());


// TODO FIX ANY
(config.entities as any[]).push(Children, Parent, GrandParent);

const Connection = createConnection(<ConnectionOptions>config);

export default Connection;
