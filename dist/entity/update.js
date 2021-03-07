import Updated from "./boolean/updated";
import Unique from "@dikac/t-array/unique";
import OmitUndefined from "@dikac/t-object/omit-undefined";
import Extract from "@dikac/t-object/extract";
import NotEmpty from "@dikac/t-object/boolean/not-empty";
import NotFound from "../throwable/not-found";
import Name from "@dikac/t-object/string/name";
import PrimaryKeyRequired from "./assert/not-undefined";
export default function Update(manager, data, key, entity, detaches = []) {
    PrimaryKeyRequired(data, key);
    OmitUndefined(data);
    const primary = data[key];
    const detach = detaches.length !== 0;
    let extract;
    if (detach) {
        detaches.push(key);
        detaches = Unique(detaches);
        extract = new Extract(data, detaches);
    }
    let promise;
    const valid = NotEmpty(data);
    if (!valid) {
        promise = Promise.resolve(data);
    }
    else {
        promise = manager.getRepository(entity || data.constructor).update(primary, data).then((result) => {
            if (!Updated(result, 1)) {
                throw new NotFound(`${primary} is not found for ${Name(data)}`);
            }
            return data;
        });
    }
    if (extract) {
        return promise.finally(() => {
            Object.assign(data, extract.return);
        });
    }
    else {
        return promise;
    }
}
//# sourceMappingURL=update.js.map