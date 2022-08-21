import {DataSource} from "typeorm/data-source/DataSource";
import Connection from "../connection";
import Insert from "../../dist/id/model/insert";
import GenerateGrandParent from "../grand-parent/generate";
import GrandParent from "../grand-parent/grand-parent";
import Generate from "./generate";
import Parent from "./parent";
import {OmitParameters} from '@alirya/object/omit';


it('force console log', () => { spyOn(console, 'log').and.callThrough();});

describe('insert test', () => {

    let connection : DataSource;
    let grandParent : GrandParent;
    let parent : Parent;

    it('open connection', (done)=>{

        Connection().connect().then((con)=>connection = con).then(done).catch(fail).then(done);
    });

    it('insert grand parent', async ()=>{
        grandParent = GenerateGrandParent();
        await Insert(connection.manager, grandParent);
    });

    it('insert parent', async ()=>{
        parent = Generate(grandParent.id as number);
        await Insert(connection.manager, parent);
    });

    it('get', async ()=>{

        const record = await connection.getRepository(Parent).findOneBy({id:parent.id})
        expect(Object.assign({}, record)).toEqual(OmitParameters(parent, 'parent'));

    });

    it('get related condition', async ()=>{

        const record = await connection.getRepository(Parent).findOneBy({
            parent: {
                id:grandParent.id
            }
        })
        expect(Object.assign({}, record)).toEqual(OmitParameters(parent, 'parent'));

    });

    it('get relation, related condition', async ()=>{

        const record = await connection.getRepository(Parent).findOne({
            relations: ['parent'],
            where :{
                parent: {
                    id:grandParent.id
                }
            }
        })

        expect(record).toEqual(Object.assign(parent, {parent:grandParent}));

    });
})

