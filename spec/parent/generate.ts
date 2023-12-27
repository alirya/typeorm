import Faker from 'faker';
import StrictAssign from '@axiona/object/strict-assign.js';
import Parent from './parent.js';
import GrandParent from '../grand-parent/grand-parent.js';

export default function Generate(parent : number) {

    const entity = new Parent();
    entity.name = Faker.name.findName();
    entity.parent = StrictAssign(new GrandParent(), {id:parent});
    return entity;
}
