import Id from './id';
import RequiredReadonly from './required-readonly';
import EnsureString from '@alirya/string/ensure/string';
import Name from "../../../object/dist/string/name";
import SafeCast from "../../../string/dist/safe-cast";

export default class RequiredReadonlyString implements RequiredReadonly<string> {

    constructor(
        private entity : Id<string>
    ) {
    }

    get id () : string {

        return  EnsureString(this.entity.id, ()=>new TypeError(`id for ${Name(this.entity)} must string, actual ${SafeCast(this.entity.id)}`));
    }

}
