import Connection from '../../../../connection';
import Value from '../../../../../dist/table/column/value';
import GrandParent from '../../../../grand-parent/grand-parent';
import GrandParentGenerate from '../../../../grand-parent/generate';
import Inserts from '../../../../../dist/entity/array/inserts';
import {Connection as OrmConnection} from 'typeorm';
import Entity from '../../../../../dist/table/entity';
import Parameter from '../../../../../dist/table/column/parameter';
import Standard from '../../../../../dist/table/column/standard';

it('force console log', () => { spyOn(console, 'log').and.callThrough();});



let entities  = [GrandParentGenerate(), GrandParentGenerate()];

let connection : OrmConnection;

it('open connection', (done)=>{

    Connection.then((con)=>connection = con).then(done).catch(fail);

});

it('insert grand-parent', (done)=>{

    Connection.then(function (connection) {

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

