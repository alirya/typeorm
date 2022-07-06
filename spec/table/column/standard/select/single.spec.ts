import Connection from '../../../../connection.js';
import Parent from '../../../../parent/parent.js';
import Standard from '../../../../../dist/table/column/standard.js';
import {Connection as OrmConnection} from 'typeorm';
import Entity from '../../../../../dist/table/entity.js';

it('force console log', () => { spyOn(console, 'log').and.callThrough();});

let connection : OrmConnection;

it('open connection', (done)=>{
    Connection().connect().then((con)=>connection = con).then(done).catch(fail);
});

it('auto', ()=>{

    let builder = connection.getRepository(Parent).createQueryBuilder();
    let table = Entity(builder, Parent);

    let standard = Standard(table, 'parent');

    expect(standard.key).toBe('parent');
    expect(standard.column).toBe('Parent.parent');

});


it('alias', ()=>{

    let builder = connection.getRepository(Parent).createQueryBuilder('P');
    let table = Entity(builder, Parent);

    let standard = Standard(table, 'parent');

    expect(standard.key).toBe('parent');
    expect(standard.column).toBe('P.parent');

});

