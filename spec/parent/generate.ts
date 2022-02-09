import * as Faker from 'faker';
import StrictAssign from '@alirya/object/strict-assign';
import Parent from './parent';
import GrandParent from '../grand-parent/grand-parent';

export default function Generate(parent : number) {

    let entity = new Parent();
    entity.name = Faker.name.findName();
    entity.parent = StrictAssign(new GrandParent(), {id:parent});
    return entity;
}
