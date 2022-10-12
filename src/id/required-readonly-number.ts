import Id from './id';
import RequiredReadonly from './required-readonly';
import EnsureNumber from '@alirya/number/ensure/number';
import Name from "../../../object/dist/string/name";
import SafeCast from "../../../string/dist/safe-cast";

export default class RequiredReadonlyNumber implements RequiredReadonly<number> {

    constructor(
        private entity : Id<number>
    ) {
    }

    get id () : number {

        return  EnsureNumber(this.entity.id, ()=>new TypeError(`id for ${Name(this.entity)} must number, actual ${SafeCast(this.entity.id)}`));
    }

}
