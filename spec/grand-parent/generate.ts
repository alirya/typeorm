import * as Faker from 'faker';
import GrandParent from './grand-parent';
import {Required} from 'utility-types';

export default function Generate() : Required<GrandParent, 'name'> {

    let entity = new GrandParent();
    entity.name = Faker.name.findName();
    return entity as Required<GrandParent, 'name'>;
}
