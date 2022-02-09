import Id from './id';

export default interface Required<Type extends number|string> extends globalThis.Required<Id<Type>> {

}
