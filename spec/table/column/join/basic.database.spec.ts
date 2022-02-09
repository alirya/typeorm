import GrandParent from '../../../grand-parent/grand-parent';
import Connection from '../../../connection';
import GrandParentGenerate from '../../../grand-parent/generate';
import Insert from '../../../../dist/entity/insert';
import Join from '../../../../dist/builder/left-join';
import Parameter from '../../../../dist/table/column/parameter';
import Entity from '../../../../dist/table/find-entity';
import {Connection as OrmConnection} from 'typeorm';
import Parent from '../../../parent/parent';
import ParentGenerate from '../../../parent/generate';
import Equal from '../../../../dist/builder/equal';
import Standard from '../../../../dist/table/column/standard';
import FindAlias from '../../../../dist/table/find-alias';

it('force console log', () => { spyOn(console, 'log').and.callThrough();});

let grandParent  = GrandParentGenerate();
let parent : Parent;

let connection : OrmConnection;

it('open connection', (done)=>{

    Connection.then((con)=>connection = con).then(done).catch(fail).then(done);

});

it('insert grand-parent', (done)=>{

    Insert(connection.manager, grandParent).then(done).catch(fail).then(done);
});

it('insert parent', (done)=>{

    parent = ParentGenerate(<number>grandParent.id);

    Insert(connection.manager, parent).then(done).catch(fail).then(done);
});

it('manual', (done)=>{

    let query = connection.getRepository(GrandParent).createQueryBuilder('GP');

    let grandParentTable = Entity(query, GrandParent);
    query = Join(query, Standard(grandParentTable, 'children'),'parent');

    let parentColumn = FindAlias(query, 'parent');
    query = Equal(query, Parameter(Standard(parentColumn, 'id')), parent.id);

    query.getOne().then(record=>{

        if(record) {

            expect(grandParent.id).toBe(<number>record.id);

        } else {

            fail('record should be exists');
        }

    }).then(done).catch(fail).then(done);

});
