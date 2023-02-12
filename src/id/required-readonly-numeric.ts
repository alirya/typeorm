import Id from './id.js';
import RequiredReadonly from './required-readonly.js';
import Numeric from "@alirya/string/ensure/numeric.js";
import {NotUndefinedParameters} from '@alirya/undefined/ensure/not-undefined.js';
import Name from '@alirya/object/string/name.js';
import SafeCast from '@alirya/string/safe-cast.js';

export default class RequiredReadonlyNumeric implements RequiredReadonly<number|string> {

    constructor(
        private entity : Id<string|number>
    ) {
    }

    get id () : number|string {

        const id = NotUndefinedParameters(this.entity.id, ()=>new TypeError(`id is not provided in ${Name(this.entity)}`))
        return Numeric(id, ()=>new TypeError(`id for ${Name(this.entity)} must numeric, actual ${SafeCast(this.entity.id)}`));
    }

}
