import {Entity, Column, Index, OneToMany} from 'typeorm';
import IdAuto from '../../dist/id/automatic.js';
import Timestamp from '../../dist/timestamp/timestamp.js';
import Parent from '../parent/parent.js';

@Entity({name:'grand-parent'})
export default class GrandParent extends IdAuto {

    static migrationPath : string = __dirname + '/migration';

    @Column(type => Timestamp)
    timestamp ?: Timestamp;

    @Index({ unique: true })
    @Column({nullable : false, type:'varchar'})
    name ?: string;

    @OneToMany(type => Parent, type => type.parent)
    children ?: Parent[];
}

