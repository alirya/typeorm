import {PrimaryGeneratedColumn} from "typeorm";
import Id from "./id";
import {decorate} from "ts-mixer";

/**
 * automatic primary generated
 */
export default class Automatic implements Id<number> {

    @decorate(PrimaryGeneratedColumn() as PropertyDecorator)
    id ?: number;

}
