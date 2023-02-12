// import {DataSource} from "typeorm";
import Connection from '../connection.js';
import Insert from '../../dist/id/model/insert.js';
import GenerateGrandParent from '../grand-parent/generate.js';
import GrandParent from '../grand-parent/grand-parent.js';
import Generate from './generate.js';
import Parent from '../parent/parent.js';
import GenerateParent from '../parent/generate.js';
import {DataSource} from 'typeorm';

it('force console log', () => { spyOn(console, 'log').and.callThrough();});

describe('insert test', () => {

    let connection : DataSource;
    let grandParent : GrandParent;
    let parent : Parent;

    it('open connection', ()=>{

        return Connection().connect().then((con)=>connection = con);
    });

    it('insert', async ()=>{

        grandParent = GenerateGrandParent();
        await Insert(connection.manager, grandParent);
    });

    it('insert', async ()=>{

        parent = GenerateParent(grandParent.id as number);
        await Insert(connection.manager, parent);
    });

    it('insert', async ()=>{

        const data = Generate(parent.id as number);
        await Insert(connection.manager, data);

        expect(typeof data.id).toBe('number');
        expect(data?.parent?.id).toBe(parent.id);
        expect(data.created).toBeInstanceOf(Date);
        expect(data.created).toBeInstanceOf(Date);

    });
})

