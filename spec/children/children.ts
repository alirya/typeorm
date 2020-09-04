import {Entity, Column, Index, ManyToOne} from "typeorm";
import {Mixin} from "ts-mixer";
import IdAuto from "../../dist/id/automatic";
import Timestamp from "../../dist/timestamp/timestamp";
import Parent from "../parent/parent";

@Entity({name:'children'})
export default class Children extends Mixin(IdAuto, Timestamp) {

    @Index({ unique: true })
    @Column({nullable : false})
    name ?: string;

    @ManyToOne(type => Parent, {nullable : true})
    parent ?: Parent;
}
