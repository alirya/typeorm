import {Entity, Column, Index, OneToMany} from 'typeorm';
import IdAuto from '../../dist/id/automatic';
import Timestamp from '../../dist/timestamp/timestamp';
import Parent from '../parent/parent';

@Entity({name:'grand-parent'})
export default class GrandParent extends IdAuto {

    @Column(type => Timestamp)
    timestamp ?: Timestamp;

    @Index({ unique: true })
    @Column({nullable : false, type:'varchar'})
    name ?: string;

    @OneToMany(type => Parent, type => type.parent)
    children ?: Parent[];
}

