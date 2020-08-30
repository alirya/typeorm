import Id from "./id";
import RequiredReadonly from "./required-readonly";
import GuardNumber from "@dikac/t-number/ensure/number";

export default class RequiredReadonlyStandard implements RequiredReadonly {

    constructor(
        private entity : Id
    ) {

    }

    get id () : number {

        return  GuardNumber(this.entity.id, ()=>new Error('id is not provided'));
    }

}
