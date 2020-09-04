import { Required } from "utility-types";
import Id from "../id";
export default function NotUndefined(entity: Id, error?: (entity: object) => Error): asserts entity is Required<Id, 'id'>;
