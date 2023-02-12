import {Entity, Column, Index, OneToMany} from 'typeorm';
import IdAuto from '../../dist/id/increment.js';
import Timestamp from '../../dist/timestamp/timestamp.js';
import Parent from '../parent/parent.js';
import Compose from '../../dist/timestamp/compose.js';

import {fileURLToPath} from 'url';
import {dirname} from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

@Entity({name:'grand-parent'})
export default class GrandParent extends Compose(IdAuto('int'))  {

    static migrationPath : string = __dirname + '/migration';

    @Index({ unique: true })
    @Column({nullable : false, type:'varchar'})
    name ?: string;

    @OneToMany(type => Parent, type => type.parent)
    children ?: Parent[];
}

