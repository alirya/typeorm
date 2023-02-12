import {DataSource} from "typeorm";
import Connection from '../connection.js';
import Class from '@alirya/class/class.js';
import Generator from '../../dist/migration/generate/data-source-generator.js';
import Write from '../../dist/migration/generate/write.js';
import GrandParent from './grand-parent.js';
import Generate from './generate.js';
import Insert from '../../dist/id/model/insert.js';


it('force console log', () => { spyOn(console, 'log').and.callThrough();});

describe('insert test', () => {

    let connection : DataSource;
    let grandParent : GrandParent;

    it('open connection', ()=>{

        return Connection().connect().then((con)=>connection = con);
    });

    it('insert', async ()=>{

        grandParent = Generate();
        await Insert(connection.manager, grandParent);

    });

    it('get', async ()=>{

        const record = await connection.getRepository(GrandParent).findOneBy({id:grandParent.id})
        expect(grandParent).toEqual(record as GrandParent);

    });
})

