import GrandParent from '../../grand-parent/grand-parent.js';
import Argument from '../../../dist/table/column/value.js';
import Entity from '../../../dist/table/entity.js';
import {Connection as OrmConnection} from 'typeorm';
import Connection from '../../connection.js';
import Parameter from '../../../dist/table/column/parameter.js';
import Standard from '../../../dist/table/column/standard.js';

it('force console log', () => { spyOn(console, 'log').and.callThrough();});

let connection : OrmConnection;

it('open connection', (done)=>{

    Connection().connect().then((con)=>connection = con).then(done).catch(fail).then(done);
});


it('basic', ()=>{

    let query = connection.getRepository(GrandParent).createQueryBuilder();
    let column  = Entity(query, GrandParent);
    let build = Argument(Parameter(Standard(column, 'id')), 5);

    expect(build.column).toBe('GrandParent.id');
    expect(build.parameter).toBe('GrandParentid');
    expect(build.argument).toEqual({'GrandParentid':5});
});

