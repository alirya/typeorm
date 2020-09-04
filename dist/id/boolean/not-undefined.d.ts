import { Required } from "utility-types";
import Id from "../id";
/**
 * check if id is set
 * @param value
 */
export default function NotUndefined(value: Id): value is Required<Id, 'id'>;
