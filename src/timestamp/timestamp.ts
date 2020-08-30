import {Column} from "typeorm";
import {decorate} from "ts-mixer";

export default class Timestamp {

    @decorate(Column({default: () => "CURRENT_TIMESTAMP"}) as PropertyDecorator)
    created ?: Date;

    @decorate(Column({default: () => 'CURRENT_TIMESTAMP() ON UPDATE CURRENT_TIMESTAMP()' }) as PropertyDecorator)
    updated ?: Date;

}
