import {PrimaryGeneratedColumn} from "typeorm";
import Id from "./id";
import {decorate} from "ts-mixer";

export default class IdAuto implements Id {

    @decorate(PrimaryGeneratedColumn() as PropertyDecorator)
    id ?: number;

}
