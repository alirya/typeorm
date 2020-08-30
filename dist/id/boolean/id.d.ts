import EntityId from "../id";
import { Required } from "utility-types";
export default function Id<Extension extends EntityId = EntityId>(value: any): value is Required<Extension, 'id'>;
