import {Entity, Column, Index, ManyToOne, OneToMany} from 'typeorm';
import IdAuto from '../../dist/id/automatic';
import Timestamp from '../../dist/timestamp/timestamp';
import GrandParent from '../grand-parent/grand-parent';
import Children from '../children/children';

@Entity({name:'parent'})
export default class Parent extends IdAuto {

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
