import GrandParent from "../../../grand-parent/grand-parent";
import Connection from "../../../connection";
import GrandParentGenerate from "../../../grand-parent/generate";
import OrderEnum from "../../../../dist/builder/order/mode/mode";
import Inserts from "../../../../dist/entity/array/inserts";
import Order from "../../../../dist/table/column/order";
import Value from "../../../../dist/table/column/standard";
import Entity from "../../../../dist/table/entity";
import {Connection as OrmConnection} from "typeorm";


it("force console log", () => { spyOn(console, 'log').and.callThrough();});

let entities  = [GrandParentGenerate()];
let ascending : GrandParent;
let descending : GrandParent;

let connection : OrmConnection;

it('open connection', (done)=>{

    return Connection.then((con)=>connection = con).then(done).catch(fail).then(done);

});

it('insert grand-parent', (done)=>{

    Inserts(connection.manager, entities, 'id').then(done).catch(fail).then(done);

});


it('ascending', (done)=>{

    let query = connection.getRepository(GrandParent).createQueryBuilder('GP');

    let select = query.select();

    new Value(Entity(select, GrandParent), 'name');

    Order(query, new Value(Entity(select, GrandParent), 'id'), OrderEnum.ASCENDING);

   select.getOne().then(record=>{

       if(!record) {

           throw new Error('record should exist');
       }

        ascending = record;

    }).then(done).catch(fail).then(done);

});

it('descending', (done)=>{

    let query = connection.getRepository(GrandParent).createQueryBuilder('GP');

    let select = query.select();

    Entity(select, GrandParent);

    Order(query, new Value(Entity(select, GrandParent), 'id'), OrderEnum.DESCENDING);

    return select.getOne().then(record=>{

        if(!record) {

            throw new Error('record should exist');
        }

        descending = record;


    }).then(done).catch(fail).then(done);

});

it('compare', ()=>{
    expect(<number>descending.id).toBeGreaterThan(<number>ascending.id);
});
