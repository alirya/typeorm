import Id from './id';
import RequiredReadonly from './required-readonly';
import EnsureString from '@alirya/string/ensure/string';
import Name from "../../../object/dist/string/name";

export default class RequiredReadonlyNumber implements RequiredReadonly<string> {

    constructor(
        private entity : Id<string>
    ) {
    }

    get id () : string {

        return  EnsureString(this.entity.id, ()=>new Error(`id is not provided in ${Name(this.entity)}`));
    }

}
