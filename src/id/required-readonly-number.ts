import Id from "./id";
import RequiredReadonly from "./required-readonly";
import EnsureNumber from "@alirya/number/ensure/number";

export default class RequiredReadonlyNumber implements RequiredReadonly<number> {

    constructor(
        private entity : Id<number>
    ) {
    }

    get id () : number {

        return  EnsureNumber(this.entity.id, ()=>new Error('id is not provided'));
    }

}
