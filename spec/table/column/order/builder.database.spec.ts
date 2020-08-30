import GrandParent from "../../../grand-parent/grand-parent";
import Connection from "../../../connection";
import GrandParentGenerate from "../../../grand-parent/grand-parent-generate";
import QueryConnection from "../../../../dist/mapper/connection";
import Entity from "../../../../dist/table/entity";
import OrderEnum from "../../../../dist/builder/order/mode/mode";
import Inserts from "../../../../dist/database/array/inserts";
import Read from "../../../../dist/builder/value/read";
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

        let standard = new QueryConnection(Entity(GrandParent), connection);

        standard.call((query, table) => {

            let order = new Order(table, 'name', OrderEnum.ASCENDING)
            return query.orderBy(order.column, order.value);

        })

       return  Read(standard.query).then(record=>{

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

        let standard = new QueryConnection(Entity(GrandParent), connection);

        standard.call((query, table) => {

            let order = new Order(table, 'name', OrderEnum.DESCENDING)
            return query.orderBy(order.column, order.value);

        })

       return  Read(standard.query).then(record=>{

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
