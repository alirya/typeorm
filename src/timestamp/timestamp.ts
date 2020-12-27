import {Column} from "typeorm";

export default class Timestamp {

    @Column({type: 'timestamp', default: () => "CURRENT_TIMESTAMP"})
    created ?: Date;

    @Column({type: 'timestamp', default: () => 'CURRENT_TIMESTAMP() ON UPDATE CURRENT_TIMESTAMP()'})
    updated ?: Date;

}
