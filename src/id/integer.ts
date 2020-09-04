import {PrimaryColumn} from "typeorm";
import Id from "./id";
import {decorate} from "ts-mixer";

/**
 * integer primary
 */
export default class Integer implements Id<number> {

    @decorate(PrimaryColumn({nullable: false, type: "int"}) as PropertyDecorator)
    id ?: number;

}
