import Connection from '../../../../connection.js';
import Standard from '../../../../../dist/table/column/standard.js';
import GrandParent from '../../../../grand-parent/grand-parent.js';
import GrandParentGenerate from '../../../../grand-parent/generate.js';
import Inserts from '../../../../../dist/entity/array/inserts.js';
import {Connection as OrmConnection} from 'typeorm';
import Entity from '../../../../../dist/table/entity.js';

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

    let builder = connection.getRepository(GrandParent).createQueryBuilder();
    let table = Entity(builder, GrandParent);

    let standard = Standard(table, 'id');

    builder.where(`${standard.column}=:parameter`, {parameter:entities[0].id});

    builder.getOne().then(record=>{

        if(record) {

            expect(record.id).toBe(entities[0].id);

        } else {

            fail('record should exits');
        }

        done();

    }).catch(fail);

});


it('alias', (done)=>{

    let builder = connection.getRepository(GrandParent).createQueryBuilder('GP');
    let table = Entity(builder, GrandParent);
    let standard = Standard(table, 'id');

    builder.where(`${standard.column}=:parameter`, {parameter:entities[1].id});

    builder.getOne().then(record=>{

        if(record) {

            expect(record.id).toBe(entities[1].id);

        } else {

            fail('record should exits');
        }

        done();

    }).catch(fail);

});

