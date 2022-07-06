import AliasNotFound from '../../../dist/table/string/alias-not-found.js';
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

    expect(AliasNotFound(true, builder, 'A')).toBe(
        'alias "A" found in "SelectQueryBuilder".'
    );

});

it('false', ()=>{

    let builder = connection.getRepository(Parent).createQueryBuilder();

    expect(AliasNotFound(false, builder, 'A')).toBe(
        'alias "A" not found in "SelectQueryBuilder".'
    );

});


