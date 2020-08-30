import GrandParent from "../../../grand-parent/grand-parent";
import Connection from "../../../connection";
import GrandParentGenerate from "../../../grand-parent/grand-parent-generate";
import Inserts from "../../../../dist/database/array/inserts";
import QueryConnection from "../../../../dist/mapper/connection";
import Entity from "../../../../dist/table/entity";
import In from "../../../../dist/table/column/in";



it("force console log", () => { spyOn(console, 'log').and.callThrough();});

let entities  = [GrandParentGenerate(), GrandParentGenerate(), GrandParentGenerate()];

it('insert grand-parent', (done)=>{

    return Connection.then(function (connection) {

        return Inserts(connection.manager, entities, 'id').then(()=>{

            done();
        });

    }).catch((e)=>{

        fail(e);
        done();
    });

});



it('builder', (done)=>{

    Connection.then(function (connection) {

        let standard = new QueryConnection(Entity(GrandParent), connection);

        let select = standard.call(query => query.select());
        let ids = entities.map(entity=>entity.id);

        select.call((query, table)=>{

            let ins = new In(table, 'id', ids);
            return query.andWhere(ins.query, ins.argument)
        })

        return  select.query.getMany().then(records=>{

            expect(records.length).toBe(entities.length);

            for (let [index, record] of records.entries()) {

                expect(record.id).toBe(entities[index].id, 'entity not found')
            }

            done();

        }).catch((e)=>{

            fail(e);
            done();
        });
    })
})
