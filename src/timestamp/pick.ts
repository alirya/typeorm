import Timestamp from './timestamp';
import {PickParameters} from '@alirya/object/pick';

export default function Pick<TimestampType extends Timestamp>(object : TimestampType) : Pick<TimestampType, 'created'|'updated'> {

    return PickParameters(object, 'updated','created');
}
