import Id from './id';
import RequiredReadonly from './required-readonly';
import Numeric from "@alirya/string/ensure/numeric";
import NotUndefined, {NotUndefinedParameters} from '@alirya/undefined/ensure/not-undefined';

export default class RequiredReadonlyNumeric implements RequiredReadonly<number|string> {

    constructor(
        private entity : Id<string|number>
    ) {
    }

    get id () : number|string {

        const id = NotUndefinedParameters(this.entity.id, ()=>new Error('id is not provided'))
        return Numeric(id, ()=>new Error('id is not provided'));
    }

}
