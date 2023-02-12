import {Entity, Column, Index, ManyToOne, OneToMany} from 'typeorm';
import IdAuto from '../../dist/id/increment.js';
import Timestamp from '../../dist/timestamp/timestamp.js';
import GrandParent from '../grand-parent/grand-parent.js';
import Children from '../children/children.js';
import Compose from '../../dist/timestamp/compose.js';

import {fileURLToPath} from 'url';
import {dirname} from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

@Entity({name:'parent'})
export default class Parent extends Compose(IdAuto('int')) {

    static migrationPath : string = __dirname + '/migration';

    @Index({ unique: true })
    @Column({nullable : false, type:'varchar'})
    name ?: string;

    @ManyToOne(type => GrandParent, {nullable : true})
    parent ?: GrandParent;

    @OneToMany(type => Children, type => type.parent)
    children ?: Children[];
}
