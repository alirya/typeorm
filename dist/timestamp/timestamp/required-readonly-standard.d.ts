import Timestamp from "./timestamp";
import RequiredReadonly from "./required-readonly";
import RequiredReadonlyTimestamp from "../required-readonly";
export default class RequiredReadonlyStandard implements RequiredReadonly {
    private entity;
    constructor(entity: Timestamp);
    get timestamp(): RequiredReadonlyTimestamp;
}
