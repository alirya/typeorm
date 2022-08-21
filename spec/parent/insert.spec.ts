import {DataSource} from "typeorm/data-source/DataSource";
import Connection from "../connection";
import Insert from "../../dist/id/model/insert";
import GenerateGrandParent from "../grand-parent/generate";
import GrandParent from "../grand-parent/grand-parent";
import Generate from "./generate";


it('force console log', () => { spyOn(console, 'log').and.callThrough();});

describe('insert test', () => {

    let connection : DataSource;
    let grandParent : GrandParent;

    it('open connection', (done)=>{

        Connection().connect().then((con)=>connection = con).then(done).catch(fail).then(done);
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

