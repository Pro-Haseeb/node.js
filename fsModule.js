
const fs = require('fs');
// const read = fs.readFile('file.txt',  (err, data)=>{
//     console.log(err, data.toString());
// })

// const readSync = fs.readFileSync('file.txt');
// console.log(readSync.toString());

// console.log("Ma Async ka bad hi run hon ga :-)");

const write = fs.writeFile('file2.txt',  'This is a Data and written in Data2.txt file', ()=>{
   console.log("Data Written into the File");
})

const writeSync = fs.writeFileSync('fileSync.txt',  'This is a Data and written in fileSync.txt file');

console.log("Ma Write ka Async ka bad hi run hon ga :-(");