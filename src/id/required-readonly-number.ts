import Id from './id.js';
import RequiredReadonly from './required-readonly.js';
import EnsureNumber from '@alirya/number/ensure/number.js';

export default class RequiredReadonlyNumber implements RequiredReadonly<number> {

    constructor(
        private entity : Id<number>
    ) {
    }

    get id () : number {

        return  EnsureNumber(this.entity.id, ()=>new Error('id is not provided'));
    }

}
