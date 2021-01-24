import Number from "@dikac/t-number/boolean/number";
export default function Affected(result) {
    if (Number(result.affected)) {
        return result.affected;
    }
    if (result.raw) {
        if (Number(result.raw.affectedRows)) {
            return result.raw.affectedRows;
        }
    }
    const json = JSON.stringify(result, null, 2);
    throw new Error(`Could not determine affected row on update, ${json}`);
}
//# sourceMappingURL=affected.js.map