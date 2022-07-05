import GrandParent from '../../../grand-parent/grand-parent';
import Connection from '../../../connection';
import GrandParentGenerate from '../../../grand-parent/generate';
import Insert from '../../../../dist/entity/insert';
import Like from '../../../../dist/builder/like';
import Padding from '@alirya/string/affix/affix';
import Value from '../../../../dist/table/column/value';
import Entity from '../../../../dist/table/entity';
import {Connection as OrmConnection} from 'typeorm';
import Standard from '../../../../dist/table/column/standard';
import Parameter from '../../../../dist/table/column/parameter';

it('force console log', () => { spyOn(console, 'log').and.callThrough();});

let entity  = GrandParentGenerate();

let connection : OrmConnection;

it('open connection', (done)=>{

    Connection().connect().then((con)=>connection = con).then(done).catch(fail).then(done);

});

it('insert grand-parent', (done)=>{

    Insert(connection.manager, entity).then(done).catch(fail).then(done);
});

it('manual', (done)=>{

    let query = connection.getRepository(GrandParent).createQueryBuilder('GP');

    let names = entity.name.split(' ');
    Value(Parameter(Standard(Entity(query, GrandParent), 'name')), names[0]);
    Like(query, Value(Parameter(Standard(Entity(query, GrandParent), 'name')), names[0]), Padding.CIRCUMFIX);

    query.getMany().then(records=>{

        let found = false;

        for (let record of records) {

            found = record.id === entity.id;

            if(found) {

                break;
            }
        }

        expect(found).toBe(true, 'entity not found');

    }).then(done).catch(fail).then(done);

});
