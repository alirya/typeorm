import {PrimaryColumn} from 'typeorm';
import Id from './id';

/**
 * integer primary
 */
export default class Integer implements Id<number> {

    @PrimaryColumn({nullable: false, type: 'unsigned big int'})
    id ?: number;

}
