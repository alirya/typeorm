import Deletable from './deletable.js';
import DeletableEntity from '../required.js';

export default interface Required extends globalThis.Required<Deletable> {

    deletable : DeletableEntity;
}
