import Id from './id';
import RequiredReadonly from './required-readonly';
import EnsureNumber from '@alirya/number/ensure/number';
import Name from "../../../object/dist/string/name";

export default class RequiredReadonlyNumber implements RequiredReadonly<number> {

    constructor(
        private entity : Id<number>
    ) {
    }

    get id () : number {

        return  EnsureNumber(this.entity.id, ()=>new Error(`id is not provided in ${Name(this.entity)}`));
    }

}
