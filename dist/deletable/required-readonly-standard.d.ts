import RequiredReadonly from "./required-readonly";
import Deletable from "./deletable";
export default class RequiredReadonlyStandard<Argument, Return> implements RequiredReadonly {
    private entity;
    constructor(entity: Deletable);
    get deleted(): null | Date;
}
