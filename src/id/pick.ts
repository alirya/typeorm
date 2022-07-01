import Id from './id';
import {PickParameters} from '@alirya/object/pick';

export default function Pick<IdType extends Id>(object : IdType) : Pick<IdType, 'id'> {

    return PickParameters(object, 'id');
}
