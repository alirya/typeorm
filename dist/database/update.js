(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../entity/boolean/updated", "@dikac/t-array/unique", "@dikac/t-object/omit-undefined", "@dikac/t-object/extract", "@dikac/t-object/boolean/not-empty", "../throwable/not-found", "@dikac/t-object/string/name", "@dikac/t-undefined/validatable/not-undefined", "../model/validatable/string/primary-key-required"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const updated_1 = require("../entity/boolean/updated");
    const unique_1 = require("@dikac/t-array/unique");
    const omit_undefined_1 = require("@dikac/t-object/omit-undefined");
    const extract_1 = require("@dikac/t-object/extract");
    const not_empty_1 = require("@dikac/t-object/boolean/not-empty");
    const not_found_1 = require("../throwable/not-found");
    const name_1 = require("@dikac/t-object/string/name");
    const not_undefined_1 = require("@dikac/t-undefined/validatable/not-undefined");
    const primary_key_required_1 = require("../model/validatable/string/primary-key-required");
    function Update(manager, entity, key, detaches = []) {
        let validatable = not_undefined_1.default(entity, (result) => primary_key_required_1.default(result, key));
        if (!validatable.valid) {
            throw new Error(validatable.message);
        }
        omit_undefined_1.default(entity);
        let primary = entity[key];
        detaches.push(key);
        detaches = unique_1.default(detaches);
        let extract = new extract_1.default(entity, detaches);
        let valid = not_empty_1.default(entity);
        let promise;
        if (!valid) {
            promise = Promise.resolve(entity);
        }
        else {
            promise = manager.getRepository(entity.constructor).update(primary, entity).then((result) => {
                if (!updated_1.default(result, 1)) {
                    throw new not_found_1.default(`${primary} is not found for ${name_1.default(entity)}`);
                }
                return entity;
            });
        }
        return promise.finally(() => {
            Object.assign(entity, extract.return);
        });
    }
    exports.default = Update;
});
//# sourceMappingURL=update.js.map