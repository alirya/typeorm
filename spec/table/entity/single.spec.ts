import Connection from "../../connection";
import Parent from "../../parent/parent";
import Entity from "../../../dist/table/entity";
import {Connection as OrmConnection} from "typeorm";

it("force console log", () => { spyOn(console, 'log').and.callThrough();});

let connection : OrmConnection;

it('open connection', (done)=>{
    return Connection.then((con)=>connection = con).then(done).catch(fail).then(done);
});

it('auto', ()=>{

    let builder = connection.getRepository(Parent).createQueryBuilder().select();
    let entity = Entity(builder, Parent);

    expect(entity.alias).toBe('Parent');
    expect(entity.entity).toBe(Parent);
});

it('alias', ()=>{

    let builder = connection.getRepository(Parent).createQueryBuilder('P').select();
    let entity = Entity(builder, Parent);

    expect(entity.alias).toBe('P');
    expect(entity.entity).toBe(Parent);
});

