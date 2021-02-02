import Mysql from "./mysql";
import Postgres from "./postgres";
export default function DuplicateEntry(value) {
    if (Mysql(value)) {
        return value.errno === 1062;
    }
    if (Postgres(value)) {
        return value.code === '23505';
    }
    return false;
}
//# sourceMappingURL=duplicate-entry.js.map