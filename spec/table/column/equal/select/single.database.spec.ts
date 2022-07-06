import Connection from '../../../../connection.js';
import Value from '../../../../../dist/table/column/value.js';
import TableConnection from '../../../../../dist/table/entity.js';
import GrandParent from '../../../../grand-parent/grand-parent.js';
import GrandParentGenerate from '../../../../grand-parent/generate.js';
import Inserts from '../../../../../dist/entity/array/inserts.js';
import {Connection as OrmConnection} from 'typeorm';
import Equal from '../../../../../dist/builder/equal.js';
import Parameter from '../../../../../dist/table/column/parameter.js';
import Standard from '../../../../../dist/table/column/standard.js';

it('force console log', () => { spyOn(console, 'log').and.callThrough();});

let entities  = [GrandParentGenerate(), GrandParentGenerate()];

let connection : OrmConnection;

it('open connection', (done)=>{

    Connection().connect().then((con)=>connection = con).then(done).catch(fail);

});

it('insert grand-parent', (done)=>{

    Inserts(connection.manager, entities, 'id').then(done).catch(fail).then(done);

});


it('auto', (done)=>{

    let query = connection.getRepository(GrandParent).createQueryBuilder();
    let table = TableConnection(query, GrandParent);

    let standard = Value(Parameter(Standard(table, 'id')), <number>entities[0].id);

    Equal(query, standard);

    query.getOne().then(record=>{

        if(record) {

            expect(record.id).toBe(entities[0].id);

        } else {

            fail('record should exits');
        }

        done();

    }).catch(fail).then(done);

});


it('alias', (done)=>{

    let query = connection.getRepository(GrandParent).createQueryBuilder('GP');
    let table = TableConnection(query, GrandParent);

    let standard = Value(Parameter(Standard(table, 'id')), entities[1].id);

    Equal(query, standard);

    query.getOne().then(record=>{

        if(record) {

            expect(record.id).toBe(entities[1].id);

        } else {

            fail('record should exits');
        }

        done();

    }).catch(fail);

});

