import Connection from "../../../../connection";
import Parent from "../../../../parent/parent";
import Parameter from "../../../../../dist/table/column/parameter";
import {Connection as OrmConnection} from "typeorm";
import Entity from "../../../../../dist/table/entity";
import Standard from "../../../../../dist/table/column/standard";

it("force console log", () => { spyOn(console, 'log').and.callThrough();});


let connection : OrmConnection;

it('open connection', (done)=>{

    Connection.then((con)=>connection = con).then(done).catch(fail);

});

it('auto', ()=>{

    let builder = connection.getRepository(Parent).createQueryBuilder( );
    let table = Entity(builder, Parent);

    let standard = Parameter(new Standard(table, 'parent'));

    expect(standard.key).toBe('parent');
    expect(standard.column).toBe('Parent.parent');
    expect(standard.parameter).toBe('Parentparent');

});


it('alias', ()=>{

    let builder = connection.getRepository(Parent).createQueryBuilder( 'P');
    let table = Entity(builder, Parent);

    let standard = Parameter(new Standard(table, 'parent'));

    expect(standard.key).toBe('parent');
    expect(standard.column).toBe('P.parent');
    expect(standard.parameter).toBe('Pparent');

});

