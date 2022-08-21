import {Entity, Column, Index, ManyToOne, OneToMany} from 'typeorm';
import IdAuto from '../../dist/id/automatic';
import Timestamp from '../../dist/timestamp/timestamp';
import GrandParent from '../grand-parent/grand-parent';
import Children from '../children/children';
import Compose from "../../dist/timestamp/compose";

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
