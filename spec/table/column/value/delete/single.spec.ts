import Connection from '../../../../connection';
import Parent from '../../../../parent/parent';
import Value from '../../../../../dist/table/column/value';
import Entity from '../../../../../dist/table/entity';
import {Connection as OrmConnection} from 'typeorm';
import Parameter from '../../../../../dist/table/column/parameter';
import Standard from '../../../../../dist/table/column/standard';

it('force console log', () => { spyOn(console, 'log').and.callThrough();});


let connection : OrmConnection;

it('open connection', (done)=>{

    Connection.then((con)=>connection = con).then(done).catch(fail);

});


it('auto', ()=>{

    let builder = connection.getRepository(Parent).createQueryBuilder().delete();

    let standard = Value(Parameter(Standard(Entity(builder, Parent), 'parent')), 1);

    expect(standard.key).toBe('parent');
    expect(standard.column).toBe('parent');
    expect(standard.parameter).toBe('parent');
    expect(standard.argument[standard.parameter]).toBe(1);

});


it('alias', ()=>{

    let builder = connection.getRepository(Parent).createQueryBuilder('P').delete();

    let standard = Value(Parameter(Standard(Entity(builder, Parent), 'parent')), 1);

    expect(standard.key).toBe('parent');
    expect(standard.column).toBe('parent');
    expect(standard.parameter).toBe('parent');
    expect(standard.argument[standard.parameter]).toBe(1);

});

