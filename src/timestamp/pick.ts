import Timestamp from './timestamp';
import PickObject from '@alirya/object/pick';

export default function Pick<TimestampType extends Timestamp>(object : TimestampType) : Pick<TimestampType, 'created'|'updated'> {

    return PickObject(object, 'updated','created');
}
