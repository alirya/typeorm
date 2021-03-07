import Updated from "./boolean/updated";
import Unique from "@dikac/t-array/unique";
import OmitUndefined from "@dikac/t-object/omit-undefined";
import Extract from "@dikac/t-object/extract";
import NotEmpty from "@dikac/t-object/boolean/not-empty";
import NotFound from "../throwable/not-found";
import Name from "@dikac/t-object/string/name";
import PrimaryKeyRequired from "./assert/not-undefined";
export default function Update(manager, entity, key, detaches = []) {
    PrimaryKeyRequired(entity, key);
    OmitUndefined(entity);
    const primary = entity[key];
    const detach = detaches.length !== 0;
    let extract;
    if (detach) {
        detaches.push(key);
        detaches = Unique(detaches);
        extract = new Extract(entity, detaches);
    }
    let promise;
    const valid = NotEmpty(entity);
    if (!valid) {
        promise = Promise.resolve(entity);
    }
    else {
        promise = manager.getRepository(entity.constructor).update(primary, entity).then((result) => {
            if (!Updated(result, 1)) {
                throw new NotFound(`${primary} is not found for ${Name(entity)}`);
            }
            return entity;
        });
    }
    if (extract) {
        return promise.finally(() => {
            Object.assign(entity, extract.return);
        });
    }
    else {
        return promise;
    }
}
//# sourceMappingURL=update.js.map