import Required from "./required";
import TimestampEntity from "../required-readonly";

export default interface RequiredReadonly extends Readonly<Required> {

    timestamp : TimestampEntity
}
