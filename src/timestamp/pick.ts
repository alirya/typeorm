import Timestamp from './timestamp.js';
import {PickParameters} from '@alirya/object/pick.js';

export default function Pick<TimestampType extends Timestamp>(object : TimestampType) : Pick<TimestampType, 'created'|'updated'> {

    return PickParameters(object, 'updated','created');
}
