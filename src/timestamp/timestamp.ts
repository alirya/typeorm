import {CreateDateColumn, UpdateDateColumn} from 'typeorm';

export default class Timestamp {

    @CreateDateColumn()
    created ?: Date;

    @UpdateDateColumn()
    updated ?: Date;

}
