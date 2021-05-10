import GrandParent from "../../../grand-parent/grand-parent";
import Connection from "../../../connection";
import GrandParentGenerate from "../../../grand-parent/generate";
import Inserts from "../../../../dist/entity/array/inserts";
import In from "../../../../dist/table/column/in";
import Value from "../../../../dist/table/column/value";
import Entity from "../../../../dist/table/entity";
import {Connection as OrmConnection} from "typeorm";

it("force console log", () => { spyOn(console, 'log').and.callThrough();});

let entities  = [GrandParentGenerate(), GrandParentGenerate(), GrandParentGenerate()];

let connection : OrmConnection;

it('open connection', (done)=>{

    Connection.then((con)=>connection = con).then(done).catch(fail);

});


it('insert grand-parent', (done)=>{

    Inserts(connection.manager, entities, 'id').then(done).catch(fail).then(done);

});


it('builder', (done)=>{

    let standard = connection.getRepository(GrandParent).createQueryBuilder();

    let ids = entities.map(entity=>entity.id);

    In(standard, new Value(Entity(standard, GrandParent), 'id', ids));

    standard.getMany().then(records=>{

        expect(records.length).toBe(entities.length);

        for (let [index, record] of records.entries()) {

            expect(record.id).toBe(entities[index].id, 'entity not found')
        }

        done();

    }).catch(fail).then(done);

})
