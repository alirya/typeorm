import Required from './required.js';

export default interface RequiredReadonly<Type extends number|string> extends Readonly<Required<Type>> {

}
