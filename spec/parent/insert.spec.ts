import {DataSource} from "typeorm";
import Connection from '../connection.js';
import Insert from '../../dist/id/model/insert.js';
import GenerateGrandParent from '../grand-parent/generate.js';
import GrandParent from '../grand-parent/grand-parent.js';
import Generate from './generate.js';


it('force console log', () => { spyOn(console, 'log').and.callThrough();});

describe('insert test', () => {

    let connection : DataSource;
    let grandParent : GrandParent;

    it('open connection', ()=>{

        return Connection().connect().then((con)=>connection = con);
    });

    it('insert grand parent', async ()=>{
        grandParent = GenerateGrandParent();
        await Insert(connection.manager, grandParent);
    });

    it('insert parent', async ()=>{
        const data = Generate(grandParent.id as number);
        await Insert(connection.manager, data);

        expect(typeof data.id).toBe('number');
        expect(data?.parent?.id).toBe(grandParent.id);
        expect(data.created).toBeInstanceOf(Date);
        expect(data.created).toBeInstanceOf(Date);

    });
})

