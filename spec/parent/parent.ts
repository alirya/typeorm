import {Entity, Column, Index, ManyToOne, OneToMany} from 'typeorm';
import IdAuto from '../../dist/id/automatic.js';
import Timestamp from '../../dist/timestamp/timestamp.js';
import GrandParent from '../grand-parent/grand-parent.js';
import Children from '../children/children.js';

@Entity({name:'parent'})
export default class Parent extends IdAuto {

    static migrationPath : string = __dirname + '/migration';

    @Column(type => Timestamp)
    timestamp ?: Timestamp;

    @Index({ unique: true })
    @Column({nullable : false, type:'varchar'})
    name ?: string;

    @ManyToOne(type => GrandParent, {nullable : true})
    parent ?: GrandParent;

    @OneToMany(type => Children, type => type.parent)
    children ?: Children[];
}
