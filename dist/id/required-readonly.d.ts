import Required from "./required";
export default interface RequiredReadonly<Type extends number | string> extends Readonly<Required<Type>> {
}
