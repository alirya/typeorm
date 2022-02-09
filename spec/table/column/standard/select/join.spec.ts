import Connection from '../../../../connection';
import Parent from '../../../../parent/parent';
import Standard from '../../../../../dist/table/column/standard';
import GrandParent from '../../../../grand-parent/grand-parent';
import TableEntity from '../../../../../dist/table/find-entity';
import {Connection as OrmConnection} from 'typeorm';

it('force console log', () => { spyOn(console, 'log').and.callThrough();});


let connection : OrmConnection;

it('open connection', (done)=>{

    Connection.then((con)=>connection = con).then(done).catch(fail);

});

it('string', ()=>{

    let builder = connection.getRepository(Parent).createQueryBuilder();

    let parent = Standard(TableEntity(builder, Parent), 'parent');

    builder.leftJoinAndSelect(parent.column, 'GP');

    let grandPrent = Standard(TableEntity(builder, GrandParent), 'name');

    expect(parent.key).toBe('parent');
    expect(parent.column).toBe('Parent.parent');

    expect(grandPrent.key).toBe('name');
    expect(grandPrent.column).toBe('GP.name');

});

it('entity alias', ()=>{

    let builder = connection.getRepository(Parent).createQueryBuilder('P').select();

    let parent = Standard(TableEntity(builder, Parent), 'parent');

    builder.leftJoinAndSelect(parent.column, 'GP');

    let grandPrent = Standard(TableEntity(builder, GrandParent), 'name');

    expect(parent.key).toBe('parent');
    expect(parent.column).toBe('P.parent');

    expect(grandPrent.key).toBe('name');
    expect(grandPrent.column).toBe('GP.name');

});


