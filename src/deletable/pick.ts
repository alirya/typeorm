import Deletable from './deletable.js';

export default function Pick<DeletableType extends Deletable>(object : DeletableType) : Pick<DeletableType, 'deleted'> {

    return {deleted:object.deleted};
}
