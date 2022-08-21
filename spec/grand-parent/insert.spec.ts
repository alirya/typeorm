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

    it('open connection', (done)=>{

        Connection().connect().then((con)=>connection = con).then(done).catch(fail).then(done);
    });

    it('insert', async ()=>{
        const data = Generate();
        await Insert(connection.manager, data);

        expect(typeof data.id).toBe('number');
        expect(data.created).toBeInstanceOf(Date);
        expect(data.created).toBeInstanceOf(Date);

    });
})

