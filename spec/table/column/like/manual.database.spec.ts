import GrandParent from "../../../grand-parent/grand-parent";
import Connection from "../../../connection";
import GrandParentGenerate from "../../../grand-parent/grand-parent-generate";
import Insert from "../../../../dist/database/insert";
import Like from "../../../../dist/table/column/like";
import Padding from "@dikac/t-string/padding/padding";


it("force console log", () => { spyOn(console, 'log').and.callThrough();});

let entity  = GrandParentGenerate();

it('insert grand-parent', (done)=>{

    return Connection.then( (connection) => {

        return Insert(connection.manager, entity).then((result)=>{

            done();
        });

    }).catch((e)=>{
        fail(e);
        done();
    });
})




it('manual', (done)=>{

    Connection.then(function (connection) {

        let query = connection.getRepository(GrandParent).createQueryBuilder('GP');

        let names = entity.name.split(' ');

        let like = new Like({entity:GrandParent, table:'GP'}, 'name', names[0], Padding.CIRCUMFIX);

        query.where(like.query, like.argument);

        query.getMany().then(records=>{

            let found = false;

            for (let record of records) {

                found = record.id === entity.id;

                if(found) {

                    break;
                }
            }

            expect(found).toBe(true, 'entity not found')

            done();
        });
    })
})
