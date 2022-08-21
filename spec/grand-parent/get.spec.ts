import {DataSource} from "typeorm/data-source/DataSource";
import Connection from "../connection";
import Class from '@alirya/class/class';
import Generator from "../../dist/migration/generate/data-source-generator";
import Write from "../../dist/migration/generate/write";
import GrandParent from "./grand-parent";
import Generate from "./generate";
import Insert from "../../dist/id/model/insert";


it('force console log', () => { spyOn(console, 'log').and.callThrough();});

describe('insert test', () => {

    let connection : DataSource;
    let grandParent : GrandParent;

    it('open connection', (done)=>{

        Connection().connect().then((con)=>connection = con).then(done).catch(fail).then(done);
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

