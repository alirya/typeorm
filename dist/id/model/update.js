import StandardUpdate from "../../entity/update";
export default function Update(manager, data, entity, detaches = []) {
    return StandardUpdate(manager, data, 'id', entity, detaches);
}
//# sourceMappingURL=update.js.map