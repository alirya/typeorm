import Table from "./table";
export default interface Parent<Entity extends object = object, Parent extends Table = Table> extends Table<Entity> {
    readonly parent: Parent;
    readonly relation: keyof Entity;
}
