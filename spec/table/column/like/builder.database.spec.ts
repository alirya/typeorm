import GrandParent from "../../../grand-parent/grand-parent";
import Connection from "../../../connection";
import GrandParentGenerate from "../../../grand-parent/grand-parent-generate";
import Insert from "../../../../dist/database/insert";
import Like from "../../../../dist/table/column/like";
import QueryConnection from "../../../../dist/mapper/connection";
import Entity from "../../../../dist/table/entity";
import Padding from "@dikac/t-string/padding/padding";


it("force console log", () => { spyOn(console, 'log').and.callThrough();});

let entity  = GrandParentGenerate();

it('insert grand-parent', (done)=>{

    return Connection.then(function (connection) {

        return Insert(connection.manager, entity).then(()=>{

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

        let names = entity.name.split(' ');


        standard.call((query, table) => {

            let like = new Like(table, 'name', names[0], Padding.CIRCUMFIX);
            return query.andWhere(like.query, like.argument);

        })

       return  standard.query.getMany().then(records=>{

            let found = false;

            for (let record of records) {

                found = record.id === entity.id;

                if(found) {

                    break;
                }
            }

            expect(found).toBe(true, 'entity not found')

            done();

        }).catch((e)=>{

            fail(e);
            done();
        });
    })
})
