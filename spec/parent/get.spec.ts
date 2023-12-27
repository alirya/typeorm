// import {DataSource} from "typeorm";
import Connection from '../connection.js';
import Insert from '../../dist/id/model/insert.js';
import GenerateGrandParent from '../grand-parent/generate.js';
import GrandParent from '../grand-parent/grand-parent.js';
import Generate from './generate.js';
import Parent from './parent.js';
import {OmitParameters} from '@axiona/object/omit.js';
import {DataSource} from 'typeorm';


it('force console log', () => { spyOn(console, 'log').and.callThrough();});

describe('insert test', () => {

    let connection : DataSource;
    let grandParent : GrandParent;
    let parent : Parent;

    it('open connection', ()=>{

        return Connection().connect().then((con)=>connection = con);
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

