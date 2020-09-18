export default function Updated(valid, result, expectation) {
    if (valid) {
        return `updated result as expected`;
    }
    else {
        return `only  update ${result.raw.affectedRows} lest than expected ${expectation} update`;
    }
}
//# sourceMappingURL=updated.js.map