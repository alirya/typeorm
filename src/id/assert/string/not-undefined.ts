import Id from '../../id.js';
import BaseNotUndefined from '../../../entity/assert/string/not-undefined.js';

export default function NotUndefined<
    Entity extends Id
>(
    valid : boolean,
    entity : Entity
) : string {

    return BaseNotUndefined(valid, entity, 'id');
}
