import {PrimaryColumn} from "typeorm";
import Id from "./id";
import {decorate} from "ts-mixer";


export default class IdInteger implements Id {

    @decorate(PrimaryColumn({nullable: false, type: "int"}) as PropertyDecorator)
    id ?: number;

}
