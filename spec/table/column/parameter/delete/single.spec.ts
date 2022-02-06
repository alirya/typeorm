import Connection from "../../../../connection";
import Parent from "../../../../parent/parent";
import Parameter from "../../../../../dist/table/column/parameter";
import Entity from "../../../../../dist/table/find-entity";
import {Connection as OrmConnection} from "typeorm";
import Standard from "../../../../../dist/table/column/standard";

it("force console log", () => { spyOn(console, 'log').and.callThrough();});


let connection : OrmConnection;

it('open connection', (done)=>{

    Connection.then((con)=>connection = con).then(done).catch(fail);

});


it('auto', ()=>{

    let builder = connection.getRepository(Parent).createQueryBuilder().delete();

    let standard = Parameter(Parameter(Standard(Entity(builder, Parent), 'parent')));

    expect(standard.key).toBe('parent');
    expect(standard.column).toBe('parent');
    expect(standard.parameter).toBe('parent');

});


it('alias', ()=>{

    let builder = connection.getRepository(Parent).createQueryBuilder('P').delete();

    let standard = Parameter(Parameter(Standard(Entity(builder, Parent), 'parent')));

    expect(standard.key).toBe('parent');
    expect(standard.column).toBe('parent');
    expect(standard.parameter).toBe('parent');

});

