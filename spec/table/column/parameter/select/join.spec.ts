import Connection from "../../../../connection";
import Parent from "../../../../parent/parent";
import Parameter from "../../../../../dist/table/column/parameter";
import GrandParent from "../../../../grand-parent/grand-parent";
import TableEntity from "../../../../../dist/table/entity";
import {Connection as OrmConnection} from "typeorm";

it("force console log", () => { spyOn(console, 'log').and.callThrough();});


let connection : OrmConnection;

it('open connection', (done)=>{

    Connection.then((con)=>connection = con).then(done).catch(fail);

});

it('string', ()=>{

    let builder = connection.getRepository(Parent).createQueryBuilder();

    let parent = new Parameter(TableEntity(builder, Parent), 'parent');

    builder.leftJoinAndSelect(parent.column, 'GP');

    let grandPrent = new Parameter(TableEntity(builder, GrandParent), 'name');

    expect(parent.key).toBe('parent');
    expect(parent.column).toBe('Parent.parent');
    expect(parent.parameter).toBe('Parentparent');

    expect(grandPrent.key).toBe('name');
    expect(grandPrent.column).toBe('GP.name');
    expect(grandPrent.parameter).toBe('GPname');

});

it('entity alias', ()=>{

    let builder = connection.getRepository(Parent).createQueryBuilder('P').select();

    let parent = new Parameter(TableEntity(builder, Parent), 'parent');

    builder.leftJoinAndSelect(parent.column, 'GP');

    let grandPrent = new Parameter(TableEntity(builder, GrandParent), 'name');

    expect(parent.key).toBe('parent');
    expect(parent.column).toBe('P.parent');
    expect(parent.parameter).toBe('Pparent');

    expect(grandPrent.key).toBe('name');
    expect(grandPrent.column).toBe('GP.name');
    expect(grandPrent.parameter).toBe('GPname');

});


