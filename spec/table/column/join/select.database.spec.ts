import GrandParent from '../../../grand-parent/grand-parent.js';
import Connection from '../../../connection.js';
import GrandParentGenerate from '../../../grand-parent/generate.js';
import Insert from '../../../../dist/entity/insert.js';
import Join from '../../../../dist/builder/left-join.js';
import Parameter from '../../../../dist/table/column/parameter.js';
import Entity from '../../../../dist/table/entity.js';
import {Connection as OrmConnection} from 'typeorm';
import Parent from '../../../parent/parent.js';
import ParentGenerate from '../../../parent/generate.js';
import Equal from '../../../../dist/builder/equal.js';
import Standard from '../../../../dist/table/column/standard.js';
import FindAlias from '../../../../dist/table/alias.js';

it('force console log', () => { spyOn(console, 'log').and.callThrough();});

let grandParent  = GrandParentGenerate();
let parent : Parent;

let connection : OrmConnection;

it('open connection', (done)=>{

    Connection().connect().then((con)=>connection = con).then(done).catch(fail).then(done);

});

it('insert grand-parent', (done)=>{

    Insert(connection.manager, grandParent).then(done).catch(fail).then(done);
});

it('insert parent', (done)=>{

    parent = ParentGenerate(<number>grandParent.id);

    Insert(connection.manager, parent).then(done).catch(fail).then(done);
});

it('manual', (done)=>{

    let query = connection.getRepository(GrandParent).createQueryBuilder('GrandParent');

    query.leftJoinAndSelect('GrandParent.children',  'Parent');
    let grandParentTable = Entity(query, GrandParent);

    query = Join(query, Parameter(Standard(grandParentTable, 'children')),  'P', true);

    const parentColumn = FindAlias(query, 'P');
    expect(parentColumn.entity).toBe(Parent);

    query = Equal(query, Parameter(Standard(parentColumn, 'id')), parent.id);

    query.getOne().then(record=>{

        if(record) {

            expect(grandParent.id).toBe(<number>record.id);

            if(record.children) {
                expect(record.children.length).toBe(1);
            } else {

                fail('children should exists');
            }

        } else {

            fail('record should be exists');
        }

    }).then(done).catch(fail).then(done);

});
