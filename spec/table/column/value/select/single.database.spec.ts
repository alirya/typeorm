import Connection from '../../../../connection.js';
import Value from '../../../../../dist/table/column/value.js';
import GrandParent from '../../../../grand-parent/grand-parent.js';
import GrandParentGenerate from '../../../../grand-parent/generate.js';
import Inserts from '../../../../../dist/entity/array/inserts.js';
import {Connection as OrmConnection} from 'typeorm';
import Entity from '../../../../../dist/table/entity.js';
import Parameter from '../../../../../dist/table/column/parameter.js';
import Standard from '../../../../../dist/table/column/standard.js';

it('force console log', () => { spyOn(console, 'log').and.callThrough();});



let entities  = [GrandParentGenerate(), GrandParentGenerate()];

let connection : OrmConnection;

it('open connection', (done)=>{

    Connection().connect().then((con)=>connection = con).then(done).catch(fail);

});

it('insert grand-parent', (done)=>{

    Connection().connect().then(function (connection) {

        return Inserts(connection.manager, entities, 'id').then(done);

    }).catch(fail);

});


it('auto', (done)=>{

    let query = connection.getRepository(GrandParent).createQueryBuilder();
    let table = Entity(query, GrandParent);

    let standard = Value(Parameter(Standard(table, 'id')), entities[0].id);

    query.where(`${standard.column}=:${standard.parameter}`, standard.argument);

    query.getOne().then(record=>{

        if(record) {

            expect(record.id).toBe(entities[0].id);

        } else {

            fail('record should exits');
        }

        done();

    }).catch(fail);

});


it('alias', (done)=>{

    let query = connection.getRepository(GrandParent).createQueryBuilder('GP');
    let table = Entity(query, GrandParent);

    let standard = Value(Parameter(Standard(table, 'id')), entities[1].id);

    query.where(`${standard.column}=:${standard.parameter}`, standard.argument);

    query.getOne().then(record=>{

        if(record) {

            expect(record.id).toBe(entities[1].id);

        } else {

            fail('record should exits');
        }

        done();

    }).catch(fail);

});

