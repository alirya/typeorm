import TimestampEntity from '../timestamp';
import {Column} from 'typeorm';

export default class Timestamp {

    @Column(type=>Timestamp)
    timestamp ?: TimestampEntity;
}
