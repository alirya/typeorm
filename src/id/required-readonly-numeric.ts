import Id from './id';
import RequiredReadonly from './required-readonly';
import Numeric from "@alirya/string/ensure/numeric";
import {NotUndefinedParameters} from '@alirya/undefined/ensure/not-undefined';
import Name from "../../../object/dist/string/name";

export default class RequiredReadonlyNumeric implements RequiredReadonly<number|string> {

    constructor(
        private entity : Id<string|number>
    ) {
    }

    get id () : number|string {

        const id = NotUndefinedParameters(this.entity.id, ()=>new Error(`id is not provided in ${Name(this.entity)}`))
        return Numeric(id, ()=>new Error(`id is not provided in ${Name(this.entity)}`));
    }

}
