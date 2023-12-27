import Id from './id.js';
import RequiredReadonly from './required-readonly.js';
import Numeric from "@axiona/string/ensure/numeric.js";
import {NotUndefinedParameters} from '@axiona/undefined/ensure/not-undefined.js';
import Name from '@axiona/object/string/name.js';
import SafeCast from '@axiona/string/safe-cast.js';

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
