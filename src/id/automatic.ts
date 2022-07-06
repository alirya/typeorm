import {PrimaryGeneratedColumn} from 'typeorm';
import Id from './id.js';

/**
 * automatic primary generated
 */
export default class Automatic implements Id<number> {

    @PrimaryGeneratedColumn()
    id ?: number;

}
