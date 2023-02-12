import Insert from '../../dist/entity/insert.js';
import Connection from '../connection.js';
import GrandParentGenerate from '../grand-parent/generate.js';
import ChildrenGenerate from '../children/generate.js';
import ParentGenerate from '../parent/generate.js';
import {DataSource} from "typeorm";

it('force console log', () => { spyOn(console, 'log').and.callThrough();});

let grandParent : number;
let prent : number;

let connection : DataSource;

it('open connection', ()=>{

    return Connection().connect().then((con)=>connection = con);
});


it('grand-parent', ()=>{

    const entity = GrandParentGenerate();

    return Insert(connection.manager, entity).then((result)=>{

        expect(result).toEqual(entity);
        expect(typeof result.id).toBe('number');
        grandParent = <number>result.id;

    });
});

it('parent', ()=>{

    const entity = ParentGenerate(grandParent);
    return Insert(connection.manager, entity).then((result)=>{

        expect(result).toEqual(entity);
        expect(typeof result.id).toBe('number');
        prent = <number>result.id;

    });
});

it('children', ()=>{

    const entity = ChildrenGenerate(prent);

    return Insert(connection.manager, entity).then((result)=>{

        expect(result).toEqual(entity);
        expect(typeof result.id).toBe('number');

    });
});
