import Builder from "../../../dist/config/prompt.js";

// console.log('aw')
// process.exit(0)
Builder().then(data=>console.log(JSON.stringify(data, null, 2)));