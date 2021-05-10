import GrandParent from "../../../grand-parent/grand-parent";
import Connection from "../../../connection";
import GrandParentGenerate from "../../../grand-parent/generate";
import Insert from "../../../../dist/entity/insert";
import Join from "../../../../dist/table/column/join";
import Parameter from "../../../../dist/table/column/parameter";
import Entity from "../../../../dist/table/entity";
import {Connection as OrmConnection} from "typeorm";
import Parent from "../../../parent/parent";
import ParentGenerate from "../../../parent/generate";
import Equal from "../../../../dist/table/column/equal";

it("force console log", () => { spyOn(console, 'log').and.callThrough();});

let grandParent  = GrandParentGenerate();
let parent : Parent;

let connection : OrmConnection;

it('open connection', (done)=>{

    Connection.then((con)=>connection = con).then(done).catch(fail).then(done);

});

it('insert grand-parent', (done)=>{

    Insert(connection.manager, grandParent).then(done).catch(fail).then(done);
})

it('insert parent', (done)=>{

    parent = ParentGenerate(<number>grandParent.id);

    Insert(connection.manager, parent).then(done).catch(fail).then(done);
})

it('manual', (done)=>{

    let query = connection.getRepository(GrandParent).createQueryBuilder('GP');

    let parentColumn = Join(query, new Parameter(Entity(query, GrandParent), 'children'),'parent');

    Equal(query, new Parameter(parentColumn, 'id'), parent.id);

    query.getOne().then(record=>{

        if(record) {

            expect(grandParent.id).toBe(<number>record.id);

        } else {

            fail('record should be exists');
        }

    }).then(done).catch(fail).then(done);

})
