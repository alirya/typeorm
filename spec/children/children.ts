import {Entity, Column, Index, ManyToOne} from 'typeorm';
import IdAuto from '../../dist/id/increment';
import Timestamp from '../../dist/timestamp/timestamp';
import Parent from '../parent/parent';
import Compose from "../../dist/timestamp/compose";

@Entity({name:'children'})
export default class Children extends Compose(IdAuto('int'))  {

    static migrationPath : string = __dirname + '/migration';

    @ManyToOne(type => Parent, {nullable : true})
    parent ?: Parent;

    @Index({ unique: true })
    @Column({nullable : false, type:'varchar'})
    name ?: string;

}
