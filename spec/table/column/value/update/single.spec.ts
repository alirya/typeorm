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

    let builder = connection.getRepository(Parent).createQueryBuilder().update();

    let standard = Value(Parameter(Standard(Entity(builder, Parent), 'parent')), 1);

    expect(standard.key).toBe('parent');
    expect(standard.column).toBe('parent');
    expect(standard.parameter).toBe('parent');
    expect(standard.argument[standard.parameter]).toBe(1);

});
