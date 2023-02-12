import Faker from 'faker';
import GrandParent from './grand-parent.js';
import {Required} from 'utility-types';

export default function Generate() : Required<GrandParent, 'name'> {

    const entity = new GrandParent();
    entity.name = Faker.name.findName();
    return entity as Required<GrandParent, 'name'>;
}
