import Id from './id.js';
import RequiredReadonly from './required-readonly.js';
import EnsureNumber from '@alirya/number/ensure/number.js';
import Name from '@alirya/object/string/name.js';
import SafeCast from '@alirya/string/safe-cast.js';

export default class RequiredReadonlyNumber implements RequiredReadonly<number> {

    constructor(
        private entity : Id<number>
    ) {
    }

    get id () : number {

        return  EnsureNumber(this.entity.id, ()=>new TypeError(`id for ${Name(this.entity)} must number, actual ${SafeCast(this.entity.id)}`));
    }

}
