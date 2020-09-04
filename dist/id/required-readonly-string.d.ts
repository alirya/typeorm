import Id from "./id";
import RequiredReadonly from "./required-readonly";
export default class RequiredReadonlyNumber implements RequiredReadonly<string> {
    private entity;
    constructor(entity: Id<string>);
    get id(): string;
}
