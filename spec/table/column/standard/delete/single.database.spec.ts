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

    return Connection.then((con)=>connection = con).then(done).catch(fail);

});

it('insert grand-parent', (done)=>{

    Inserts(connection.manager, entities, 'id').then(done).catch(fail);
});

it('auto', (done)=>{

    let repository = connection.getRepository(GrandParent);

    let builder = repository.createQueryBuilder().delete();

    let standard = new Standard(Entity(builder, GrandParent), 'id');

    builder.where(`${standard.column}=:parameter`, {parameter:entities[0].id});

    builder.execute().then(()=>{

        repository.createQueryBuilder().select().where(`${standard.column}=:parameter`, {parameter:entities[0].id}).getOne().then(record=>{

            expect(record).toBe(undefined)

            done();
        });

    }).catch(fail);

});


it('alias', (done)=>{

    let repository = connection.getRepository(GrandParent);

    let builder = repository.createQueryBuilder('GP').delete();

    let standard = new Standard(Entity(builder, GrandParent), 'id');

    builder.where(`${standard.column}=:parameter`, {parameter:entities[1].id})

    builder.execute().then(()=>{

        repository.createQueryBuilder('GP').where(`${standard.column}=:parameter`, {parameter:entities[1].id}).select().getOne().then(record=>{

            expect(record).toBe(undefined);
            done();
        });

    }).catch(fail);

});

