import Mysql from "./mysql";
export default function DuplicateEntry(value) {
    if (Mysql(value)) {
        return value.errno === 1062;
    }
    return false;
}
//# sourceMappingURL=duplicate-entry.js.map