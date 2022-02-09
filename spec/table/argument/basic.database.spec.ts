import Connection from '../../connection';
import GrandParentGenerate from '../../grand-parent/generate';
import Insert from '../../../dist/entity/insert';
import GrandParent from '../../grand-parent/grand-parent';
import Argument from '../../../dist/table/column/value';
import Parameter from '../../../dist/table/column/parameter';
import Entity from '../../../dist/table/find-entity';
import {Connection as OrmConnection} from 'typeorm';
import Standard from '../../../dist/table/column/standard';

it('force console log', () => { spyOn(console, 'log').and.callThrough();});

let entity : GrandParent;
let connection : OrmConnection;

it('open connection', (done)=>{

    Connection.then((con)=>connection = con).then(done).catch(fail).then(done);
});

it('grand-parent', (done)=>{

    entity = GrandParentGenerate();
    Insert(connection.manager,  entity).then((result)=>done());
});

it('parent', (done)=>{

    Connection.then(function (connection) {

        let query = connection.getRepository(GrandParent).createQueryBuilder();
        let table = Entity(query, GrandParent);

        let build = Argument(Parameter(Standard(table, 'id')), entity.id);

        query.andWhere(`${build.column}=:${build.parameter}`, build.argument);

        query.getOne().then(record=>{

            if(record) {

                expect(record.id).toBe(entity.id);
                expect(record.name).toBe(entity.name);

            } else {

                fail('record should exist');
            }

            done();

        });
    });
});

