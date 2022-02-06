import Id from "./id";
import RequiredReadonly from "./required-readonly";
import EnsureString from "@alirya/string/ensure/string";

export default class RequiredReadonlyNumber implements RequiredReadonly<string> {

    constructor(
        private entity : Id<string>
    ) {
    }

    get id () : string {

        return  EnsureString(this.entity.id, ()=>new Error('id is not provided'));
    }

}
