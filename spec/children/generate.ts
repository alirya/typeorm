import Children from './children.js';
import Faker from 'faker';
import StrictAssign from '@axiona/object/strict-assign.js';
import Parent from '../parent/parent.js';

export default function Generate(parent : number) {

    const entity = new Children();
    entity.name = Faker.name.findName();
    entity.parent = StrictAssign(new Parent(), {id:parent});
    return entity;
}
