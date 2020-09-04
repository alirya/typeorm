import { Optional } from "utility-types";
import Id from "../id";
export default function Undefined(entity: Id, error?: (entity: object) => Error): asserts entity is Optional<Id, 'id'>;
