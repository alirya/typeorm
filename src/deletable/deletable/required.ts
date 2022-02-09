import Deletable from './deletable';
import DeletableEntity from '../required';

export default interface Required extends globalThis.Required<Deletable> {

    deletable : DeletableEntity;
}
