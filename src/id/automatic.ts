import {PrimaryGeneratedColumn} from 'typeorm';
import Id from './id';

/**
 * automatic primary generated
 */
export default class Automatic implements Id<number|string> {

    @PrimaryGeneratedColumn("increment", {type:'bigint', unsigned:true})
    id ?: number|string;

}
