import Id from "./id";
import RequiredReadonly from "./required-readonly";
export default class RequiredReadonlyNumber implements RequiredReadonly<number> {
    private entity;
    constructor(entity: Id<number>);
    get id(): number;
}
