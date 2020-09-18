import NotFound from "../../throwable/not-found";
export default function Read(query) {
    return query.getOne().then((entity) => {
        if (entity) {
            return entity;
        }
        throw new NotFound(`record ${query.alias} not found`, query.getParameters());
    });
}
//# sourceMappingURL=read.js.map