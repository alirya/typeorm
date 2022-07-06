import Children from './children.js';
import * as Faker from 'faker';
import StrictAssign from '@alirya/object/strict-assign.js';
import Parent from '../parent/parent.js';

export default function Generate(parent : number) {

    let entity = new Children();
    entity.name = Faker.name.findName();
    entity.parent = StrictAssign(new Parent(), {id:parent});
    return entity;
}
