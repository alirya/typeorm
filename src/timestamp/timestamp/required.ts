import Timestamp from './timestamp.js';
import TimestampEntity from '../required.js';

export default interface Required extends globalThis.Required<Timestamp> {

    timestamp : TimestampEntity;
}
