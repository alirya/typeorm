import {Entity, Column, Index, ManyToOne} from 'typeorm';
import IdAuto from '../../dist/id/automatic.js';
import Timestamp from '../../dist/timestamp/timestamp.js';
import Parent from '../parent/parent.js';

@Entity({name:'children'})
export default class Children extends IdAuto {

    static migrationPath : string = __dirname + '/migration';

    @Column(type => Timestamp)
    timestamp ?: Timestamp;

    @ManyToOne(type => Parent, {nullable : true})
    parent ?: Parent;

    @Index({ unique: true })
    @Column({nullable : false, type:'varchar'})
    name ?: string;

}
