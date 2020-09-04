import Connection from "../../../../connection";
import Value from "../../../../../dist/table/column/value";
import Equal from "../../../../../dist/table/column/equal";
import GrandParent from "../../../../grand-parent/grand-parent";
import GrandParentGenerate from "../../../../grand-parent/generate";
import Inserts from "../../../../../dist/entity/array/inserts";
import Entity from "../../../../../dist/table/entity";
import {Connection as OrmConnection} from "typeorm";

it("force console log", () => { spyOn(console, 'log').and.callThrough();});

let entities  = [GrandParentGenerate(), GrandParentGenerate()];

let connection : OrmConnection;

it('open connection', (done)=>{

    return Connection.then((con)=>connection = con).then(done).catch(fail).then(done);

});

it('insert grand-parent', (done)=>{

    return Inserts(connection.manager, entities, 'id').then(done).catch(fail).then(done);
});

it('auto', (done)=>{

    let repository = connection.getRepository(GrandParent);

    let builder = repository.createQueryBuilder().delete();

    let standard = new Value(Entity(builder, GrandParent), 'id', entities[0].id);

    Equal(builder, standard, standard.value);

    builder.execute().then(()=>{

        let select = repository.createQueryBuilder().select();

        Equal(select, standard, standard.value);

        return select.getOne().then(record=>{

            expect(record).toBe(undefined)

            done();
        });

    }).catch(fail).then(done);
});


it('alias', (done)=>{

    let repository = connection.getRepository(GrandParent);

    let builder = repository.createQueryBuilder('GP').delete();

    let standard = new Value(Entity(builder, GrandParent), 'id', entities[1].id);

    Equal(builder, standard);

    builder.execute().then(()=>{

        let select = repository.createQueryBuilder('GP').select();

        Equal(select, standard);

        return select.getOne().then(record=>{

            expect(record).toBe(undefined);
            done();
        });

    }).catch(fail).then(done);

});

