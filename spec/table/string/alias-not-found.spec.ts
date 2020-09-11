import AliasNotFound from "../../../dist/table/string/alias-not-found";
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

    expect(AliasNotFound(true, builder, 'A')).toBe(
        'alias "A" found in "SelectQueryBuilder".'
    );

});

it('false', ()=>{

    let builder = connection.getRepository(Parent).createQueryBuilder();

    expect(AliasNotFound(false, builder, 'A')).toBe(
        'alias "A" not found in "SelectQueryBuilder".'
    );

});


