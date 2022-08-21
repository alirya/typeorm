import {DataSource} from "typeorm/data-source/DataSource";
import Connection from "../connection";
import Insert from "../../dist/id/model/insert";
import GenerateGrandParent from "../grand-parent/generate";
import GrandParent from "../grand-parent/grand-parent";
import Generate from "./generate";
import Parent from "../parent/parent";
import GenerateParent from "../parent/generate";
import Children from "./children";
import {OmitParameters} from '@alirya/object/omit';


it('force console log', () => { spyOn(console, 'log').and.callThrough();});

describe('insert test', () => {

    let connection : DataSource;
    let grandParent : GrandParent;
    let parent : Parent;
    let children : Children;

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

        children = Generate(parent.id as number);
        await Insert(connection.manager, children);
    });


    it('get', async ()=>{

        const record = await connection.getRepository(Children).findOneBy({id:children.id})
        expect(Object.assign({}, record)).toEqual(OmitParameters(children, 'parent'));

    });

    it('get related condition', async ()=>{

        const record = await connection.getRepository(Children).findOneBy({
            parent: {
                id:parent.id
            }
        })
        expect(Object.assign({}, record)).toEqual(OmitParameters(children, 'parent'));

    });

    it('get multiple related condition', async ()=>{

        const record = await connection.getRepository(Children).findOneBy({
            parent: {
                parent: {
                    id:grandParent.id
                }
            }
        })
        expect(Object.assign({}, record)).toEqual(OmitParameters(children, 'parent'));

    });

    it('get relation, related condition', async ()=>{

        const record = await connection.getRepository(Children).findOne({
            relations: ['parent'],
            where :{
                parent: {
                    id:parent.id
                }
            }
        })

        expect(record).toEqual(Object.assign(children, {
            parent : Object.assign(new Parent(), OmitParameters(parent, 'parent'))
        }));

    });

    it('get multiple relation, multiple related condition', async ()=>{

        const record = await connection.getRepository(Children).findOne({
            relations: ['parent', 'parent.parent'],
            where :{
                parent: {
                    parent: {
                        id:grandParent.id
                    }
                }
            }
        })

        expect(record).toEqual(Object.assign(children, {
            parent : Object.assign(parent, {parent:grandParent})
        }));

    });
})

