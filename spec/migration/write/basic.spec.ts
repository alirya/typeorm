import {DataSource} from "typeorm";
import Connection from '../../connection.js';
import Write from '../../../dist/migration/generate/write.js';
import Generator from '../../../dist/migration/generate/data-source-generator.js';
import Class from '@alirya/class/class.js';
import FsExtra from "fs-extra";
import Children from '../../children/children.js';
import Parent from '../../parent/parent.js';
import GrandParent from '../../grand-parent/grand-parent.js';

jasmine.DEFAULT_TIMEOUT_INTERVAL = 2147483647;

it('force console log', () => { spyOn(console, 'log').and.callThrough();});

function PathReplace(path) : string {

    return path.replace('dist-spec', 'spec')
}

let connection : DataSource;

it('open connection', ()=>{

    return Connection().connect().then((con)=>connection = con);
});

it('clean migrations directories', async ()=>{

    for (const metadata of connection.entityMetadatas) {

        {
            const path = PathReplace((metadata.target as Class & { migrationPath: string }).migrationPath);
            await FsExtra.emptyDir(path);
        }

        {
            const path = (metadata.target as Class & { migrationPath: string }).migrationPath;
            await FsExtra.emptyDir(path);
        }
    }

});


it('delete existing', async ()=>{

    const metadatas = new Set(connection.entityMetadatas);

    const list = [
        Children,
        Parent,
        GrandParent,
    ];

    let sortedMetadata = list.map(list => {

        for (let metadata of metadatas) {

            if(metadata.target === list) {
                return metadata;
            }
        }

        throw new Error('metadata not found');
    });

    while (metadatas.size) {

        for (const metadata of sortedMetadata) {

            try {

                await connection.createQueryRunner().dropTable(metadata.tableName, true, true, true);

                metadatas.delete(metadata);

                console.log(`deleting ${metadata.tableName} success`);

            } catch (error) {

                console.log(`deleting ${metadata.tableName} error, skipping`);
                console.log(error);
            }

        }
    }
})

it('write', async ()=>{

    const generate = await Generator('initial', connection, console.log);

    await Write<Class & {migrationPath:string}>(
        generate,
        (entity)=>entity.migrationPath,
        path => path.replace('dist-spec', 'spec'),
        console.log
    )
});

it('wait compiler',  (done)=>{

    setTimeout(done, 1500);
});

it('check table', async ()=>{

    const runner = connection.createQueryRunner();

    for (const metadata of connection.entityMetadatas) {

        const exists = await runner.hasTable(metadata.tableName);

        expect(exists).toBeFalse();
    }

});

it('truncate migrations', async ()=>{

    const runner = connection.createQueryRunner();
    await runner.clearTable('migrations');

});

it('disconnect', async ()=>{

    await connection.destroy();
});


it('re-open connection', async ()=>{

    await Connection({synchronize:false})
        .connect()
        .then((con)=>connection = con)
        .catch(fail);
});

it('execute migration', async ()=>{

    expect((await connection.runMigrations()).length).toBe(5);
});