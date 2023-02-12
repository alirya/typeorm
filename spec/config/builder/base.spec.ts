// import Builder from "../../../dist/config/builder.js";
// import Standard from "../../../dist/database/standard.js";
// import Config from "../../../dist/config/config.js";
// import {spawn, spawnSync, exec} from "child_process.js";
// import {resolve} from "path";
//
// it('force console log', () => { spyOn(console, 'log').and.callThrough();});
//
// //jasmine.DEFAULT_TIMEOUT_INTERVAL = 2147483647;
// jasmine.DEFAULT_TIMEOUT_INTERVAL = 5000;
//
// //
// // it('base', (done)=>{
// //
// //    // const path = '/dist-spec/config/builder/runner.js';
// //    // const root = resolve(__dirname + '/../../../');
// //    //
// //    //  console.log(root + path);
// //    // // done();
// //    // const proc = exec(`node  '${root}${path}'`);
// //    // console.log(proc.stdout.);
// //    // console.log(proc.stderr);
// //    //
// //    // done();
// //     // const standard = new Standard({
// //     //     "type": "postgres",
// //     //     "replication": {
// //     //         "master": {
// //     //             "url": "",
// //     //             "host": "localhost",
// //     //             "port": 5432,
// //     //             "username": "postgres",
// //     //             "password": "root",
// //     //             "database": "ketikan-client-dev"
// //     //         },
// //     //         "slaves": [
// //     //             {
// //     //                 "url": "",
// //     //                 "host": "localhost",
// //     //                 "port": 5432,
// //     //                 "username": "postgres",
// //     //                 "password": "root",
// //     //                 "database": "ketikan-client-dev"
// //     //             }
// //     //         ]
// //     //     }
// //     // } as Config);
// //     //
// //     // return standard.connect().then(done)
// //
// //    // Builder().then(data=>console.log(JSON.stringify(data, null, 2))).catch(fail).then(done);
// //
// // });
//
// describe('test', ()=>{
//
//    const commands = [];
//    commands.push('1')
//
// it('base', (done)=>{
//
//    const path = './dist-spec/config/builder/runner.js';
//    const root = resolve(__dirname + '/../../../');
//
//     console.log(root + path);
//    // done();
//    const proc = spawn(`node -r esm ${path}`, {
//       env : process.env,
//       shell: true,
//       cwd : root
//    });
//    proc.stdout.on('data', (data) =>{
//
//       let command = commands.shift();
//       if(command) {
//          let ok = proc.stdin.write(command, (error)=>{
//             console.log('stedin error');
//             console.log(error);
//             // done();
//          });
//          proc.stdin.end();
//          console.log('ok');
//          console.log(ok);
//
//       }
//
//       console.log('stdout');
//       console.log(data.toString());
//       // done();
//    })
//
//    proc.stdout.on('end', (data) =>{
//
//
//       console.log('stdout end');
//       console.log(data.toString());
//       // done();
//    })
//
//    proc.stderr.on('data', (data) =>{
//
//       console.log('error');
//       console.log(data.toString());
//    // done();
//    })
//
//
//    proc.stdin.on('data', (data) =>{
//
//       console.log('stdin');
//       console.log(data.toString());
//    // done();
//    })
//
//    proc.on('close', (data) =>{
//
//       console.log('close');
//       console.log(data);
//    // done();
//    })
//
//
//    // setTimeout(done, 5000)
//
//     // const standard = new Standard({
//     //     "type": "postgres",
//     //     "replication": {
//     //         "master": {
//     //             "url": "",
//     //             "host": "localhost",
//     //             "port": 5432,
//     //             "username": "postgres",
//     //             "password": "root",
//     //             "database": "ketikan-client-dev"
//     //         },
//     //         "slaves": [
//     //             {
//     //                 "url": "",
//     //                 "host": "localhost",
//     //                 "port": 5432,
//     //                 "username": "postgres",
//     //                 "password": "root",
//     //                 "database": "ketikan-client-dev"
//     //             }
//     //         ]
//     //     }
//     // } as Config);
//     //
//     // return standard.connect().then(done)
//
//    // Builder().then(data=>console.log(JSON.stringify(data, null, 2))).catch(fail).then(done);
//
// });
// });