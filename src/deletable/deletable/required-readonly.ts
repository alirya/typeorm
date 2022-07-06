import Required from './required.js';
import DeletableEntity from '../required-readonly.js';

export default interface RequiredReadonly extends Readonly<Required> {

    deletable : DeletableEntity;
}
