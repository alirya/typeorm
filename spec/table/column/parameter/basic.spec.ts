import {Connection as OrmConnection} from 'typeorm/connection/Connection.js';
import Connection from '../../../connection.js';
import GrandParent from '../../../grand-parent/grand-parent.js';
import Parameter from '../../../../dist/table/column/parameter.js';
import Standard from '../../../../dist/table/column/standard.js';
import Entity from '../../../../dist/table/entity.js';

it('force console log', () => { spyOn(console, 'log').and.callThrough();});


let connection : OrmConnection;

it('open connection', (done)=>{

    Connection().connect().then((con)=>connection = con).then(done).catch(fail);

});

it('auto', ()=>{

    let repository = connection.getRepository(GrandParent);

    let builder = repository.createQueryBuilder();

    let standard = Parameter(Standard(Entity(builder, GrandParent), 'id'));

    expect(standard.key).toBe('id');
    expect(standard.parameter).toBe('GrandParentid');
    expect(standard.column).toBe('GrandParent.id');
});

it('static', ()=>{

    let repository = connection.getRepository(GrandParent);

    let builder = repository.createQueryBuilder();

    let standard = Parameter(Standard(Entity(builder, GrandParent), 'id'), 'staticParameter');

    expect(standard.key).toBe('id');
    expect(standard.parameter).toBe('staticParameter');
    expect(standard.column).toBe('GrandParent.id');
});

it('callback', ()=>{

    let repository = connection.getRepository(GrandParent);

    let builder = repository.createQueryBuilder();

    let standard = Parameter(Standard(Entity(builder, GrandParent), 'id'), ()=>'ab.cd');

    expect(standard.key).toBe('id');
    expect(standard.parameter).toBe('abcd');
    expect(standard.column).toBe('GrandParent.id');

});
