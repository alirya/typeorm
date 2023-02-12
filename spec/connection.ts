import Children from './children/children.js';
import Parent from './parent/parent.js';
import * as Fs from 'fs';
import GrandParent from './grand-parent/grand-parent.js';
import Standard from '../dist/database/standard.js';
import Config from '../dist/config/config.js';
import Database from '../dist/database/database.js';

import {fileURLToPath} from 'url';
import {dirname} from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const configPath = __dirname + '/../database.json';

if(!Fs.existsSync(configPath)) {

    Fs.copyFileSync(
        __dirname + '/../database.json-dist',
        configPath
    );
}

export default function Connection(config : Partial<Config> = {}) : Database {

    const configFile : Config = JSON.parse(Fs.readFileSync(configPath).toString());

    const merged = Object.assign(configFile, config);

    const con = new Standard(merged)
    con.config.entities.set(Children, Children.migrationPath);
    con.config.entities.set(Parent, Parent.migrationPath);
    con.config.entities.set(GrandParent, GrandParent.migrationPath);

    return con;
}



