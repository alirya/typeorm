import Children from "./children";
import * as Faker from "faker";
import StrictAssign from "@dikac/t-object/strict-assign";
import Parent from "../parent/parent";

export default function Generate(parent : number) {

    let entity = new Children();
    entity.name = Faker.name.findName();
    entity.parent = StrictAssign(new Parent(), {id:parent});
    return entity;
}
