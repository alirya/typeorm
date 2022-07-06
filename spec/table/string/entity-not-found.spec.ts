import EntityNotFound from '../../../dist/table/string/entity-not-found.js';
import Parent from '../../parent/parent.js';
import {Connection as OrmConnection} from 'typeorm';
import Connection from '../../connection.js';

it('enable console log', () => { spyOn(console, 'log').and.callThrough();});

let connection : OrmConnection;

it('open connection', (done)=>{
    Connection().connect().then((con)=>connection = con).then(done).catch(fail);
});


it('true', ()=>{

    let builder = connection.getRepository(Parent).createQueryBuilder();
    expect(EntityNotFound(true, Parent, builder)).toBe(
        'entity "Parent" found in "SelectQueryBuilder".'
    );

});

it('false', ()=>{

    let builder = connection.getRepository(Parent).createQueryBuilder();
    expect(EntityNotFound(false, Parent, builder)).toBe(
        'entity "Parent" not found in "SelectQueryBuilder".'
    );

});
