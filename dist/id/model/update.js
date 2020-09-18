import StandardUpdate from "../../entity/update";
export default function Update(manager, entity, detaches = []) {
    return StandardUpdate(manager, entity, 'id', detaches);
}
//# sourceMappingURL=update.js.map