import EntityNotFound from "../../../dist/table/string/entity-not-found";
import Parent from "../../parent/parent";
import {Connection as OrmConnection} from "typeorm";
import Connection from "../../connection";

it("enable console log", () => { spyOn(console, 'log').and.callThrough();});

let connection : OrmConnection;

it('open connection', (done)=>{
    Connection.then((con)=>connection = con).then(done).catch(fail);
});


it('true', ()=>{

    let builder = connection.getRepository(Parent).createQueryBuilder();
    expect(EntityNotFound(true, Parent, builder)).toBe(
        'entity "Parent" found in "SelectQueryBuilder".'
    );

});

it('false', ()=>{

    let builder = connection.getRepository(Parent).createQueryBuilder();
    expect(EntityNotFound(false, Parent, builder)).toBe(
        'entity "Parent" not found in "SelectQueryBuilder".'
    );

});
