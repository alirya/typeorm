import Id from './id';
import PickObject from '@alirya/object/pick-parameters';

export default function Pick<IdType extends Id>(object : IdType) : Pick<IdType, 'id'> {

    return PickObject(object, 'id');
}
