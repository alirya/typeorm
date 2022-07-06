import Insert from '../../dist/entity/insert.js';
import Connection from '../connection.js';
import GrandParentGenerate from '../grand-parent/generate.js';
import ChildrenGenerate from '../children/generate.js';
import ParentGenerate from '../parent/generate.js';
import {DataSource} from 'typeorm/data-source/DataSource';

it('force console log', () => { spyOn(console, 'log').and.callThrough();});

let grandParent : number;
let prent : number;

let connection : DataSource;

it('open connection', (done)=>{

    Connection().connect().then((con)=>connection = con).then(done).catch(fail).then(done);
});


it('grand-parent', (done)=>{

    let entity = GrandParentGenerate();

    Insert(connection.manager, entity).then((result)=>{

        expect(result).toEqual(entity);
        expect(typeof result.id).toBe('number');
        grandParent = <number>result.id;

    }).then(done).catch(fail).then(done);
});

it('parent', (done)=>{

    let entity = ParentGenerate(grandParent);
    Insert(connection.manager, entity).then((result)=>{

        expect(result).toEqual(entity);
        expect(typeof result.id).toBe('number');
        prent = <number>result.id;

    }).then(done).catch(fail).then(done);
});

it('children', (done)=>{

    let entity = ChildrenGenerate(prent);

    Insert(connection.manager, entity).then((result)=>{

        expect(result).toEqual(entity);
        expect(typeof result.id).toBe('number');
        done();
    });
});
