import Connection from '../../../../connection.js';
import Parent from '../../../../parent/parent.js';
import Value from '../../../../../dist/table/column/value.js';
import {Connection as OrmConnection} from 'typeorm';
import Entity from '../../../../../dist/table/entity.js';
import Parameter from '../../../../../dist/table/column/parameter.js';
import Standard from '../../../../../dist/table/column/standard.js';

it('force console log', () => { spyOn(console, 'log').and.callThrough();});

let connection : OrmConnection;

it('open connection', (done)=>{
    Connection().connect().then((con)=>connection = con).then(done).catch(fail);
});

it('auto', ()=>{

    let query = connection.getRepository(Parent).createQueryBuilder();
    let table = Entity(query, Parent);

    let standard = Value(Parameter(Standard(table, 'parent')), 1);

    expect(standard.key).toBe('parent');
    expect(standard.column).toBe('Parent.parent');
    expect(standard.parameter).toBe('Parentparent');
    expect(standard.argument[standard.parameter]).toBe(1);

});


it('alias', ()=>{

    let query = connection.getRepository(Parent).createQueryBuilder('P');
    let table = Entity(query, Parent);

    let standard = Value(Parameter(Standard(table, 'parent')), 1);

    expect(standard.key).toBe('parent');
    expect(standard.column).toBe('P.parent');
    expect(standard.parameter).toBe('Pparent');
    expect(standard.argument[standard.parameter]).toBe(1);

});

