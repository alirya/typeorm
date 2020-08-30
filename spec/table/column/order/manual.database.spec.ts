import GrandParent from "../../../grand-parent/grand-parent";
import Connection from "../../../connection";
import GrandParentGenerate from "../../../grand-parent/grand-parent-generate";
import OrderEnum from "../../../../dist/builder/order/mode/mode";
import Inserts from "../../../../dist/database/array/inserts";
import Order from "../../../../dist/table/column/order";


it("force console log", () => { spyOn(console, 'log').and.callThrough();});

let entities  = [GrandParentGenerate()];
let ascending : GrandParent;
let descending : GrandParent;

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


it('ascending', (done)=>{

    Connection.then(function (connection) {

        let query = connection.getRepository(GrandParent).createQueryBuilder('GP');

        let select = query.select();

        let order = new Order({entity:GrandParent, table:'GP'}, 'name', OrderEnum.ASCENDING)
        select.orderBy(order.column, order.value);

       return select.getOne().then(record=>{

           if(!record) {

               throw new Error('record should exist');
           }

            ascending = record;
            done();

        }).catch((e)=>{

            fail(e);
            done();
        });
    })
});

it('descending', (done)=>{

    Connection.then(function (connection) {

        let query = connection.getRepository(GrandParent).createQueryBuilder('GP');

        let select = query.select();

        let order = new Order({entity:GrandParent, table:'GP'}, 'name', OrderEnum.DESCENDING)
        select.orderBy(order.column, order.value);

       return select.getOne().then(record=>{

           if(!record) {

               throw new Error('record should exist');
           }

           descending = record;
            done();

        }).catch((e)=>{

            fail(e);
            done();
        });
    })
});

it('compare', ()=>{
    expect(<number>descending.id).toBeGreaterThan(<number>ascending.id);
});
