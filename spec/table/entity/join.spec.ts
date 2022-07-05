import Connection from '../../connection';
import Parent from '../../parent/parent';
import Standard from '../../../dist/table/column/standard';
import GrandParent from '../../grand-parent/grand-parent';
import TableEntity from '../../../dist/table/entity';
import Entity from '../../../dist/table/entity';
import {Connection as OrmConnection} from 'typeorm';

it('force console log', () => { spyOn(console, 'log').and.callThrough();});

let connection : OrmConnection;

it('open connection', (done)=>{
    Connection().connect().then((con)=>connection = con).then(done).catch(fail);
});

it('string', ()=>{

    let query = connection.getRepository(Parent).createQueryBuilder();
    let table = Entity(query, Parent);

    let parent = Standard(table, 'parent');

    query.leftJoinAndSelect(parent.column, 'GP');

    let grandParentTable = TableEntity(query, GrandParent);

    let grandPrent = Standard(grandParentTable, 'name');

    expect(parent.key).toBe('parent');
    expect(parent.column).toBe('Parent.parent');

    expect(grandPrent.key).toBe('name');
    expect(grandPrent.column).toBe('GP.name');
});

it('entity alias', ()=>{

    let builder = connection.getRepository(Parent).createQueryBuilder('P').select();

    let table = TableEntity(builder, Parent);

    let parent = Standard(table, 'parent');

    builder.leftJoinAndSelect(parent.column, 'GP');

    let grandParentTable = TableEntity(builder, GrandParent);

    let grandPrent = Standard(grandParentTable, 'name');

    expect(parent.key).toBe('parent');
    expect(parent.column).toBe('P.parent');

    expect(grandPrent.key).toBe('name');
    expect(grandPrent.column).toBe('GP.name');

});


