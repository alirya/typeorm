import {DataSource} from "typeorm/data-source/DataSource";
import Connection from "../connection";
import Insert from "../../dist/id/model/insert";
import GenerateGrandParent from "../grand-parent/generate";
import GrandParent from "../grand-parent/grand-parent";
import Generate from "./generate";
import Parent from "../parent/parent";
import GenerateParent from "../parent/generate";


it('force console log', () => { spyOn(console, 'log').and.callThrough();});

describe('insert test', () => {

    let connection : DataSource;
    let grandParent : GrandParent;
    let parent : Parent;

    it('open connection', (done)=>{

        Connection().connect().then((con)=>connection = con).then(done).catch(fail).then(done);
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

