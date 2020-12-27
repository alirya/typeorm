import Timestamp from "./timestamp";
import TimestampEntity from "../required";

export default interface Required extends globalThis.Required<Timestamp> {

    timestamp : TimestampEntity
}
