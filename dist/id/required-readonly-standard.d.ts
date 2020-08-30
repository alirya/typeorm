import Id from "./id";
import RequiredReadonly from "./required-readonly";
export default class RequiredReadonlyStandard implements RequiredReadonly {
    private entity;
    constructor(entity: Id);
    get id(): number;
}
