import Connection from '../../../../connection.js';
import Value from '../../../../../dist/table/column/value.js';
import Equal from '../../../../../dist/builder/equal.js';
import GrandParent from '../../../../grand-parent/grand-parent.js';
import GrandParentGenerate from '../../../../grand-parent/generate.js';
import Inserts from '../../../../../dist/entity/array/inserts.js';
import Entity from '../../../../../dist/table/entity.js';
import {Connection as OrmConnection} from 'typeorm';
import Parameter from '../../../../../dist/table/column/parameter.js';
import Standard from '../../../../../dist/table/column/standard.js';

it('force console log', () => { spyOn(console, 'log').and.callThrough();});

let entities  = [GrandParentGenerate(), GrandParentGenerate()];

let connection : OrmConnection;

it('open connection', (done)=>{

    Connection().connect().then((con)=>connection = con).then(done).catch(fail).then(done);

});

it('insert grand-parent', (done)=>{

    Inserts(connection.manager, entities, 'id').then(done).catch(fail).then(done);
});

it('auto', (done)=>{

    let repository = connection.getRepository(GrandParent);

    let builder = repository.createQueryBuilder().delete();

    let standard = Value(Parameter(Standard(Entity(builder, GrandParent), 'id')), entities[0].id);

    Equal(builder, standard, standard.value);

    builder.execute().then(()=>{

        let select = repository.createQueryBuilder().select();

        Equal(select, standard, standard.value);

        return select.getOne().then(record=>{

            expect(record).toBe(null);

            done();
        });

    }).catch(fail).then(done);
});


it('alias', (done)=>{

    let repository = connection.getRepository(GrandParent);

    let builder = repository.createQueryBuilder('GP').delete();

    let standard = Value(Parameter(Standard(Entity(builder, GrandParent), 'id')), entities[1].id);

    Equal(builder, standard);

    builder.execute().then(()=>{

        let select = repository.createQueryBuilder('GP').select();

        Equal(select, standard);

        return select.getOne().then(record=>{

            expect(record).toBe(null);
            done();
        });

    }).catch(fail).then(done);

});

