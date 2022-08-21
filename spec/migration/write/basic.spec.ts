import {DataSource} from "typeorm/data-source/DataSource";
import Connection from "../../connection";
import Write from "../../../dist/migration/generate/write";
import Generator from "../../../dist/migration/generate/data-source-generator";
import Class from '@alirya/class/class';
import FsExtra from "fs-extra";

jasmine.DEFAULT_TIMEOUT_INTERVAL = 2147483647;

it('force console log', () => { spyOn(console, 'log').and.callThrough();});

function PathReplace(path) : string {

    return path.replace('dist-spec', 'spec')
}

let connection : DataSource;

it('open connection', (done)=>{

    Connection().connect().then((con)=>connection = con).then(done).catch(fail).then(done);
});

it('clean migrations directories', async ()=>{

    for (let metadata of connection.entityMetadatas) {

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

    const metadatas = new Set(connection.entityMetadatas)

    while (metadatas.size) {

        for (const metadata of metadatas) {

            try {

                await connection.createQueryRunner().dropTable(metadata.tableName, true, true, true);

                metadatas.delete(metadata);

                console.log(`deleting ${metadata.tableName} success`)

            } catch (error) {

                console.log(`deleting ${metadata.tableName} error, skipping`)
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

    for (let metadata of connection.entityMetadatas) {

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