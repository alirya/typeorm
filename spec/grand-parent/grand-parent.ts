import {Entity, Column, Index, OneToMany} from "typeorm";
import {Mixin} from "ts-mixer";
import IdAuto from "../../dist/id/automatic";
import Timestamp from "../../dist/timestamp/timestamp";
import Parent from "../parent/parent";

@Entity({name:'grand-parent'})
export default class GrandParent extends Mixin(IdAuto, Timestamp) {

    @Index({ unique: true })
    @Column({nullable : false})
    name ?: string;

    @OneToMany(type => Parent, type => type.parent)
    children ?: Parent[];
}
