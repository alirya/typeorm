export default function Updated(result, expectation) {
    if (result.raw && isFinite(result.raw.affectedRows)) {
        return result.raw.affectedRows === expectation;
    }
    else {
        throw new Error('Update data not available');
    }
}
//# sourceMappingURL=updated.js.map