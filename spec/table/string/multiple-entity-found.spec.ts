import MultipleEntityFound from '../../../dist/table/string/multiple-entity-found.js';
import {Connection as OrmConnection} from 'typeorm';
import Connection from '../../connection.js';
import Parent from '../../parent/parent.js';

it('enable console log', () => { spyOn(console, 'log').and.callThrough();});

let connection : OrmConnection;

it('open connection', (done)=>{
    Connection().connect().then((con)=>connection = con).then(done).catch(fail);
});


it('true', ()=>{

    let builder = connection.getRepository(Parent).createQueryBuilder();
    expect(MultipleEntityFound(Parent, builder)).toBe(
        'multiple entity "Parent" found in "SelectQueryBuilder".'
    );

});

it('false', ()=>{

    let builder = connection.getRepository(Parent).createQueryBuilder();
    expect(MultipleEntityFound(Parent, builder)).toBe(
        'multiple entity "Parent" found in "SelectQueryBuilder".'
    );

});
