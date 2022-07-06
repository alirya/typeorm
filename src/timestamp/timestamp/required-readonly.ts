import Required from './required.js';
import TimestampEntity from '../required-readonly.js';

export default interface RequiredReadonly extends Readonly<Required> {

    timestamp : TimestampEntity;
}
