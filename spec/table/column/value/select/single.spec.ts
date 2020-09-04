import Connection from "../../../../connection";
import Parent from "../../../../parent/parent";
import Value from "../../../../../dist/table/column/value";
import {Connection as OrmConnection} from "typeorm";
import Entity from "../../../../../dist/table/entity";

it("force console log", () => { spyOn(console, 'log').and.callThrough();});

let connection : OrmConnection;

it('open connection', (done)=>{
    return Connection.then((con)=>connection = con).then(done).catch(fail);
});

it('auto', ()=>{

    let query = connection.getRepository(Parent).createQueryBuilder();
    let table = Entity(query, Parent);

    let standard = new Value(table, 'parent', 1);

    expect(standard.key).toBe('parent');
    expect(standard.column).toBe('Parent.parent');
    expect(standard.parameter).toBe('Parentparent');
    expect(standard.argument[standard.parameter]).toBe(1);

});


it('alias', ()=>{

    let query = connection.getRepository(Parent).createQueryBuilder('P');
    let table = Entity(query, Parent);

    let standard = new Value(table, 'parent', 1);

    expect(standard.key).toBe('parent');
    expect(standard.column).toBe('P.parent');
    expect(standard.parameter).toBe('Pparent');
    expect(standard.argument[standard.parameter]).toBe(1);

});

