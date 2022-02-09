import {DeleteDateColumn} from 'typeorm';

export default class Deletable {

    @DeleteDateColumn()
    deleted ?: Date|null;

}
