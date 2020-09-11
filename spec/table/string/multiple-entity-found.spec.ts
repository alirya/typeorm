import MultipleEntityFound from "../../../dist/table/string/multiple-entity-found";
import {Connection as OrmConnection} from "typeorm";
import Connection from "../../connection";
import Parent from "../../parent/parent";

it("enable console log", () => { spyOn(console, 'log').and.callThrough();});

let connection : OrmConnection;

it('open connection', (done)=>{
    return Connection.then((con)=>connection = con).then(done).catch(fail);
});


it('true', ()=>{

    let builder = connection.getRepository(Parent).createQueryBuilder();
    expect(MultipleEntityFound(Parent, builder)).toBe(
        'multiple entity "Parent" found in "SelectQueryBuilder".'
    );

});

it('false', ()=>{

    let builder = connection.getRepository(Parent).createQueryBuilder();
    expect(MultipleEntityFound(Parent, builder)).toBe(
        'multiple entity "Parent" found in "SelectQueryBuilder".'
    );

});
