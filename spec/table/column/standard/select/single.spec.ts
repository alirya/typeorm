import Connection from "../../../../connection";
import Parent from "../../../../parent/parent";
import Standard from "../../../../../dist/table/column/standard";
import {Connection as OrmConnection} from "typeorm";
import Entity from "../../../../../dist/table/entity";

it("force console log", () => { spyOn(console, 'log').and.callThrough();});

let connection : OrmConnection;

it('open connection', (done)=>{
    return Connection.then((con)=>connection = con).then(done).catch(fail);
});

it('auto', ()=>{

    let builder = connection.getRepository(Parent).createQueryBuilder();
    let table = Entity(builder, Parent);

    let standard = new Standard(table, 'parent');

    expect(standard.key).toBe('parent');
    expect(standard.column).toBe('Parent.parent');

});


it('alias', ()=>{

    let builder = connection.getRepository(Parent).createQueryBuilder('P');
    let table = Entity(builder, Parent);

    let standard = new Standard(table, 'parent');

    expect(standard.key).toBe('parent');
    expect(standard.column).toBe('P.parent');

});

