import Connection from "../../connection";
import GrandParentGenerate from "../../grand-parent/grand-parent-generate";
import Insert from "../../../dist/database/insert";
import GrandParent from "../../grand-parent/grand-parent";
import Argument from "../../../dist/table/column/value";
import StdColumn from "../../../dist/table/entity";
import Manager from "../../../dist/mapper/connection";
import Entity from "../../../dist/table/entity";

it("force console log", () => { spyOn(console, 'log').and.callThrough();});

let entity : GrandParent;

it('grand-parent', (done)=>{

    Connection.then(function (connection) {

        entity = GrandParentGenerate();
        Insert(connection.manager,  entity).then((result)=>done());
    })
})

it('parent', (done)=>{

    Connection.then(function (connection) {

        let query = new Manager(StdColumn(GrandParent), connection.manager);

        let column  = Entity(GrandParent);
        let build = new Argument(column, 'id', entity.id);


        let select = query.query.select();
        select.andWhere(`${build.column}=:${build.parameter}`, build.argument);

        select.getOne().then(record=>{

            if(record) {

                expect(record.id).toBe(entity.id);
                expect(record.name).toBe(entity.name);

            } else {

                fail('record should exist')
            }

            done();

        })
    })
})

