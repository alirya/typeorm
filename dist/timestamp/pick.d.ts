import Timestamp from "./timestamp";
export default function Pick<TimestampType extends Timestamp>(object: TimestampType): Pick<TimestampType, 'created' | 'updated'>;
