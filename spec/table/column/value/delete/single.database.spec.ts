import Connection from '../../../../connection';
import Value from '../../../../../dist/table/column/value';
import GrandParent from '../../../../grand-parent/grand-parent';
import GrandParentGenerate from '../../../../grand-parent/generate';
import Inserts from '../../../../../dist/entity/array/inserts';
import Entity from '../../../../../dist/table/find-entity';
import {Connection as OrmConnection} from 'typeorm';
import Parameter from '../../../../../dist/table/column/parameter';
import Standard from '../../../../../dist/table/column/standard';

it('force console log', () => { spyOn(console, 'log').and.callThrough();});



let entities  = [GrandParentGenerate(), GrandParentGenerate()];

let connection : OrmConnection;

it('open connection', (done)=>{

    Connection.then((con)=>connection = con).then(done).catch(fail);

});

it('insert grand-parent', (done)=>{

    Inserts(connection.manager, entities, 'id').then(done).catch(fail);
});

it('auto', (done)=>{

    let repository = connection.getRepository(GrandParent);

    let builder = repository.createQueryBuilder().delete();

    let standard = Value(Parameter(Standard(Entity(builder, GrandParent), 'id')), entities[0].id);

    builder.where(`${standard.column}=:${standard.parameter}`, standard.argument);

    builder.execute().then(()=>{

        repository.createQueryBuilder().select().where(`${standard.column}=:${standard.parameter}`, standard.argument).getOne().then(record=>{

            expect(record).toBe(undefined);

            done();
        });

    }).catch(fail);
});


it('alias', (done)=>{


    let repository = connection.getRepository(GrandParent);

    let builder = repository.createQueryBuilder('GP').delete();

    let standard = Value(Parameter(Standard(Entity(builder, GrandParent), 'id')), entities[1].id);

    builder.where(`${standard.column}=:${standard.parameter}`, standard.argument);

    builder.execute().then(()=>{

        repository.createQueryBuilder('GP').where(`${standard.column}=:${standard.parameter}`, standard.argument).select().getOne().then(record=>{

            expect(record).toBe(undefined);
            done();
        });

    }).catch(fail);

});

