import Connection from '../../../../connection';
import Parent from '../../../../parent/parent';
import Parameter from '../../../../../dist/table/column/parameter';
import GrandParent from '../../../../grand-parent/grand-parent';
import TableEntity from '../../../../../dist/table/entity';
import {Connection as OrmConnection} from 'typeorm';
import Standard from '../../../../../dist/table/column/standard';

it('force console log', () => { spyOn(console, 'log').and.callThrough();});


let connection : OrmConnection;

it('open connection', (done)=>{

    Connection().connect().then((con)=>connection = con).then(done).catch(fail);

});

it('string', ()=>{

    let builder = connection.getRepository(Parent).createQueryBuilder();

    let parent = Parameter(Standard(TableEntity(builder, Parent), 'parent'));

    builder.leftJoinAndSelect(parent.column, 'GP');

    let grandPrent = Parameter(Standard(TableEntity(builder, GrandParent), 'name'));

    expect(parent.key).toBe('parent');
    expect(parent.column).toBe('Parent.parent');
    expect(parent.parameter).toBe('Parentparent');

    expect(grandPrent.key).toBe('name');
    expect(grandPrent.column).toBe('GP.name');
    expect(grandPrent.parameter).toBe('GPname');

});

it('entity alias', ()=>{

    let builder = connection.getRepository(Parent).createQueryBuilder('P').select();

    let parent = Parameter(Standard(TableEntity(builder, Parent), 'parent'));

    builder.leftJoinAndSelect(parent.column, 'GP');

    let grandPrent = Parameter(Standard(TableEntity(builder, GrandParent), 'name'));

    expect(parent.key).toBe('parent');
    expect(parent.column).toBe('P.parent');
    expect(parent.parameter).toBe('Pparent');

    expect(grandPrent.key).toBe('name');
    expect(grandPrent.column).toBe('GP.name');
    expect(grandPrent.parameter).toBe('GPname');

});


