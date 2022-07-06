import Connection from '../../../../connection.js';
import Parameter from '../../../../../dist/table/column/parameter.js';
import GrandParent from '../../../../grand-parent/grand-parent.js';
import GrandParentGenerate from '../../../../grand-parent/generate.js';
import Inserts from '../../../../../dist/entity/array/inserts.js';
import Entity from '../../../../../dist/table/entity.js';
import {Connection as OrmConnection} from 'typeorm';
import Standard from '../../../../../dist/table/column/standard.js';

it('force console log', () => { spyOn(console, 'log').and.callThrough();});



let entities  = [GrandParentGenerate(), GrandParentGenerate()];
let connection : OrmConnection;

it('open connection', (done)=>{

    Connection().connect().then((con)=>connection = con).then(done).catch(fail);

});


it('insert grand-parent', (done)=>{

    Inserts(connection.manager, entities, 'id').then(done);
});

it('auto', (done)=>{

    let repository = connection.getRepository(GrandParent);

    let builder = repository.createQueryBuilder().update({
        name : entities[0].name + 'updated'
    });

    let standard = Parameter(Standard(Entity(builder, GrandParent), 'id'));

    builder.where(`${standard.column}=:${standard.parameter}`, {[standard.parameter]:entities[0].id});

    builder.execute().then(()=>{

        return repository.createQueryBuilder().select().where(`${standard.column}=:${standard.parameter}`, {[standard.parameter]:entities[0].id}).getOne().then(record=>{

            if(record) {

                expect(record.id).toBe(entities[0].id);
                expect(record.name).toBe(entities[0].name + 'updated');

            } else {

                fail('record should exits');
            }

            done();
        });

    }).then(done).catch(fail);

});


it('alias', (done)=>{

    let repository = connection.getRepository(GrandParent);

    let builder = repository.createQueryBuilder('GP').update({
        name : entities[1].name + 'updated'
    });

    let standard = Parameter(Standard(Entity(builder, GrandParent), 'id'));

    builder.where(`${standard.column}=:${standard.parameter}`, {[standard.parameter]:entities[1].id});

    builder.execute().then(()=>{

        return repository.createQueryBuilder('GP').where(`${standard.column}=:${standard.parameter}`, {[standard.parameter]:entities[1].id}).select().getOne().then(record=>{

            if(record) {

                expect(record.id).toBe(entities[1].id);

            } else {

                fail('record should exits');
            }

        });

    }).then(done).catch(fail);

});

