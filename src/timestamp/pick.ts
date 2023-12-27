import Timestamp from './timestamp.js';
import {PickParameters} from '@axiona/object/pick.js';

export default function Pick<TimestampType extends Timestamp>(object : TimestampType) : Pick<TimestampType, 'created'|'updated'> {

    return PickParameters(object, 'updated','created');
}
