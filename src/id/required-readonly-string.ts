import Id from './id';
import RequiredReadonly from './required-readonly';
import EnsureString from '@alirya/string/ensure/string';
import Name from '@alirya/object/string/name';
import SafeCast from '@alirya/string/safe-cast';

export default class RequiredReadonlyString implements RequiredReadonly<string> {

    constructor(
        private entity : Id<string>
    ) {
    }

    get id () : string {

        return  EnsureString(this.entity.id, ()=>new TypeError(`id for ${Name(this.entity)} must string, actual ${SafeCast(this.entity.id)}`));
    }

}
