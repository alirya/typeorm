import GrandParent from "../../grand-parent/grand-parent";
import Argument from "../../../dist/table/column/value";
import Entity from "../../../dist/table/entity";
import {Connection as OrmConnection} from "typeorm";
import Connection from "../../connection";

it("force console log", () => { spyOn(console, 'log').and.callThrough();});

let connection : OrmConnection;

it('open connection', (done)=>{

    Connection.then((con)=>connection = con).then(done).catch(fail).then(done);
});


it('basic', ()=>{

    let query = connection.getRepository(GrandParent).createQueryBuilder();
    let column  = Entity(query, GrandParent);
    let build = new Argument(column, 'id', 5);

    expect(build.column).toBe('GrandParent.id');
    expect(build.parameter).toBe('GrandParentid');
    expect(build.argument).toEqual({'GrandParentid':5});
})

