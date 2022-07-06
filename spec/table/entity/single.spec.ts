import Connection from '../../connection.js';
import Parent from '../../parent/parent.js';
import Entity from '../../../dist/table/entity.js';
import {Connection as OrmConnection} from 'typeorm';

it('force console log', () => { spyOn(console, 'log').and.callThrough();});

let connection : OrmConnection;

it('open connection', (done)=>{
    Connection().connect().then((con)=>connection = con).then(done).catch(fail).then(done);
});

it('auto', ()=>{

    let builder = connection.getRepository(Parent).createQueryBuilder().select();
    let entity = Entity(builder, Parent);

    expect(entity.alias).toBe('Parent');
    expect(entity.entity).toBe(Parent);
});

it('alias', ()=>{

    let builder = connection.getRepository(Parent).createQueryBuilder('P').select();
    let entity = Entity(builder, Parent);

    expect(entity.alias).toBe('P');
    expect(entity.entity).toBe(Parent);
});

