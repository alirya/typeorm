import PostgresError from "../postgres";
export default function Postgres(value: any): value is PostgresError;
export default function Postgres(value: PostgresError): value is PostgresError;
