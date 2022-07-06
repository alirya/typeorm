import TimestampEntity from '../timestamp.js';
import {Column} from 'typeorm';

export default class Timestamp {

    @Column(type=>Timestamp)
    timestamp ?: TimestampEntity;
}
