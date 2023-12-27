// import {DataSource} from "typeorm";
import Connection from '../connection.js';
import Insert from '../../dist/id/model/insert.js';
import GenerateGrandParent from '../grand-parent/generate.js';
import GrandParent from '../grand-parent/grand-parent.js';
import Generate from './generate.js';
import Parent from '../parent/parent.js';
import GenerateParent from '../parent/generate.js';
import Children from './children.js';
import {OmitParameters} from '@axiona/object/omit.js';
import {DataSource} from 'typeorm';

it('force console log', () => { spyOn(console, 'log').and.callThrough();});

describe('insert test', () => {

    let connection : DataSource;
    let grandParent : GrandParent;
    let parent : Parent;
    let children : Children;

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

