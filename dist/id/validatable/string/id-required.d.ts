import Id from "../../id";
import Value from "@dikac/t-value/value";
import Validatable from "@dikac/t-validatable/validatable";
export default function IdRequired(object: Value<Id> & Validatable): string;
