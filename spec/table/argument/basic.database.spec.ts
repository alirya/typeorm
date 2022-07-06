import Connection from '../../connection.js';
import GrandParentGenerate from '../../grand-parent/generate.js';
import Insert from '../../../dist/entity/insert.js';
import GrandParent from '../../grand-parent/grand-parent.js';
import Argument from '../../../dist/table/column/value.js';
import Parameter from '../../../dist/table/column/parameter.js';
import Entity from '../../../dist/table/entity.js';
import {Connection as OrmConnection} from 'typeorm';
import Standard from '../../../dist/table/column/standard.js';

it('force console log', () => { spyOn(console, 'log').and.callThrough();});

let entity : GrandParent;
let connection : OrmConnection;

it('open connection', (done)=>{

    Connection().connect().then((con)=>connection = con).then(done).catch(fail).then(done);
});

it('grand-parent', (done)=>{

    entity = GrandParentGenerate();
    Insert(connection.manager,  entity).then((result)=>done());
});

it('parent', (done)=>{

    Connection().connect().then(function (connection) {

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

