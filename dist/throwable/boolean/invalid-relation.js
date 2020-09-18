import Mysql from "./mysql";
export default function InvalidRelation(value) {
    if (Mysql(value)) {
        return value.errno === 1452;
    }
    return false;
}
//# sourceMappingURL=invalid-relation.js.map