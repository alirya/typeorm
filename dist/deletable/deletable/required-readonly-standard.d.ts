import Deletable from "./deletable";
import RequiredReadonly from "./required-readonly";
import RequiredReadonlyDeletable from "../required-readonly";
export default class RequiredReadonlyStandard implements RequiredReadonly {
    private entity;
    constructor(entity: Deletable);
    get deletable(): RequiredReadonlyDeletable;
}
