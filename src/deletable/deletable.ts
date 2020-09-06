import {DeleteDateColumn} from "typeorm";
import {decorate} from "ts-mixer";

export default class Deletable {

    @decorate(DeleteDateColumn() as PropertyDecorator)
    deleted ?: Date|null;

}
