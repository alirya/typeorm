import Id from './id';
import PickObject from '@alirya/object/pick';

export default function Pickz<IdType extends Id>(object : IdType) : Pick<IdType, 'id'> {

    return PickObject(object, 'id');
}
