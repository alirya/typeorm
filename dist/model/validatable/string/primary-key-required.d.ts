import Value from "@dikac/t-value/value";
import Id from "../../../id/id";
import Validatable from "@dikac/t-validatable/validatable";
export default function PrimaryKeyRequired(object: Value<Id> & Validatable, key: PropertyKey): string;
