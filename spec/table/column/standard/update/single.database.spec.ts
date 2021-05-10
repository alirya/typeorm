import Connection from "../../../../connection";
import Standard from "../../../../../dist/table/column/standard";
import GrandParent from "../../../../grand-parent/grand-parent";
import GrandParentGenerate from "../../../../grand-parent/generate";
import Inserts from "../../../../../dist/entity/array/inserts";
import Entity from "../../../../../dist/table/entity";
import {Connection as OrmConnection} from "typeorm";

it("force console log", () => { spyOn(console, 'log').and.callThrough();});


let entities  = [GrandParentGenerate(), GrandParentGenerate()];
let connection : OrmConnection;

it('open connection', (done)=>{

    Connection.then((con)=>connection = con).then(done).catch(fail);

});


it('insert grand-parent', (done)=>{

    Inserts(connection.manager, entities, 'id').then(done);
});

it('auto', (done)=>{

    let repository = connection.getRepository(GrandParent);

    let builder = repository.createQueryBuilder().update({
        name : entities[0].name + 'updated'
    });

    let standard = new Standard(Entity(builder, GrandParent), 'id');

    builder.where(`${standard.column}=:parameter`, {parameter:entities[0].id});

    builder.execute().then(()=>{

        return repository.createQueryBuilder().select().where(`${standard.column}=:parameter`, {parameter:entities[0].id}).getOne().then(record=>{

            if(record) {

                expect(record.id).toBe(entities[0].id)
                expect(record.name).toBe(entities[0].name + 'updated')

            } else {

                fail('record should exits')
            }

            done();
        });

    }).then(done).catch(fail);

});


it('alias', (done)=>{

    let repository = connection.getRepository(GrandParent);

    let builder = repository.createQueryBuilder('GP').update({
        name : entities[1].name + 'updated'
    });

    let standard = new Standard(Entity(builder, GrandParent), 'id');

    builder.where(`${standard.column}=:parameter`, {parameter:entities[1].id})

    builder.execute().then(()=>{

        return repository.createQueryBuilder('GP').where(`${standard.column}=:parameter`, {parameter:entities[1].id}).select().getOne().then(record=>{

            if(record) {

                expect(record.id).toBe(entities[1].id)

            } else {

                fail('record should exits')
            }

        });

    }).then(done).catch(fail);

});

