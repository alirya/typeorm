import Connection from "../../../../connection";
import Parent from "../../../../parent/parent";
import Value from "../../../../../dist/table/column/value";
import Parameter from "../../../../../dist/table/column/parameter";
import GrandParent from "../../../../grand-parent/grand-parent";
import GrandParentGenerate from "../../../../grand-parent/generate";
import Inserts from "../../../../../dist/entity/array/inserts";
import ParentGenerate from "../../../../parent/generate";
import Insert from "../../../../../dist/id/model/insert";
import TableEntity from "../../../../../dist/table/entity";
import {Connection as OrmConnection} from "typeorm";

it("force console log", () => { spyOn(console, 'log').and.callThrough();});



let grandParent  = GrandParentGenerate();
let parents : [Parent, Parent]

let connection : OrmConnection;

it('open connection', (done)=>{

    return Connection.then((con)=>connection = con).then(done).catch(fail);

});


it('insert grand-parent', (done)=>{

    Insert(connection.manager, grandParent).then((record)=>{

        parents  = [ParentGenerate(record.id), ParentGenerate(record.id)];

        return Inserts(connection.manager, parents, 'id').then(done);

    }).catch(fail);

});

it('auto', (done)=>{

    let builder = connection.getRepository(GrandParent).createQueryBuilder().select();

    let stdGrandParent = new Parameter(TableEntity(builder, GrandParent), 'children');

    builder.leftJoin(stdGrandParent.column, 'P');

    let parent = new Value(TableEntity(builder, Parent), 'id', parents[0].id);

    builder.where(`${parent.column}=:${parent.parameter}`, parent.argument)

    builder.getOne().then(record=>{

        if(record) {

            expect(record.id).toBe(<number>grandParent.id);
            expect(record).toBeInstanceOf(GrandParent);

        } else {

            fail('record should exits')
        }

        done();

    }).catch(fail);

});


it('alias', (done)=>{

    let builder = connection.getRepository(GrandParent).createQueryBuilder('GP').select();

    builder.leftJoin(Parent, 'P', 'GP.id = P.parent');

    let parent = new Value(TableEntity(builder, Parent), 'id', parents[1].id);

    builder.where(`${parent.column}=:${parent.parameter}`, parent.argument)

    builder.getOne().then(record=>{

        if(record) {

            expect(record.id).toBe(<number>grandParent.id);
            expect(record).toBeInstanceOf(GrandParent);

        } else {

            fail('record should exits')
        }

        done();

    }).catch(fail).then(done);

});

