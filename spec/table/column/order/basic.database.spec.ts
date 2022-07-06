import GrandParent from '../../../grand-parent/grand-parent.js';
import Connection from '../../../connection.js';
import GrandParentGenerate from '../../../grand-parent/generate.js';
import OrderEnum from '../../../../dist/builder/order/mode/mode.js';
import Inserts from '../../../../dist/entity/array/inserts.js';
import Order from '../../../../dist/table/column/order.js';
import Value from '../../../../dist/table/column/standard.js';
import Entity from '../../../../dist/table/entity.js';
import {Connection as OrmConnection} from 'typeorm';


it('force console log', () => { spyOn(console, 'log').and.callThrough();});

let entities  = [GrandParentGenerate()];
let ascending : GrandParent;
let descending : GrandParent;

let connection : OrmConnection;

it('open connection', (done)=>{

    Connection().connect().then((con)=>connection = con).then(done).catch(fail).then(done);

});

it('insert grand-parent', (done)=>{

    Inserts(connection.manager, entities, 'id').then(done).catch(fail).then(done);

});


it('ascending', (done)=>{

    let query = connection.getRepository(GrandParent).createQueryBuilder('GP');

    let select = query.select();

    Value(Entity(select, GrandParent), 'name');

    Order(query, Value(Entity(select, GrandParent), 'id'), OrderEnum.ASCENDING);

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

    Order(query, Value(Entity(select, GrandParent), 'id'), OrderEnum.DESCENDING);

    select.getOne().then(record=>{

        if(!record) {

            throw new Error('record should exist');
        }

        descending = record;


    }).then(done).catch(fail).then(done);

});

it('compare', ()=>{
    expect(<number>descending.id).toBeGreaterThan(<number>ascending.id);
});
