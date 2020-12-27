import Required from "./required";
import DeletableEntity from "../required-readonly";
export default interface RequiredReadonly extends Readonly<Required> {
    deletable: DeletableEntity;
}
