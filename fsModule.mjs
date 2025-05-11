
// const fs = require('fs');
// const read = fs.readFile('file.txt',  (err, data)=>{
//     console.log(err, data.toString());
// })

// const readSync = fs.readFileSync('file.txt');
// console.log(readSync.toString());

// console.log("Ma Async ka bad hi run hon ga :-)");

// const write = fs.writeFile('file2.txt',  'This is a Data and written in Data2.txt file', ()=>{
//    console.log("Data Written into the File");
// })

// const writeSync = fs.writeFileSync('fileSync.txt',  'This is a Data and written in fileSync.txt file');

// console.log("Ma Write ka Async ka bad hi run hon ga :-(");


// fs.access('example.txt', fs.constants.F_OK, (err) => {
//   console.log(err ? 'File does NOT exist' : 'File exists');
// });  // Check if file exist or not


//fs stream and Types
// ReadAble Stream 
// import fs from 'fs';

// const readableStream = fs.createReadStream('largeFile.txt', 'utf8');

// // Data ko read karte waqt 'data' event fire hota hai
// readableStream.on('data', (chunk) => {
//   console.log('New chunk:', chunk);
// });

// // Jab saara data read ho jaata hai, 'end' event fire hota hai
// readableStream.on('end', () => {
//   console.log('Finished reading the file');
// });

//WriteAble Stream
// import fs from 'fs';

// const writableStream = fs.createWriteStream('output.txt');

// // Data ko write karte waqt 'write' method use hota hai
// writableStream.write('Hello Haseeb!\n');
// writableStream.write('How are you?\n');

// writableStream.end(() => {
//   console.log('File writing complete');
// });



//Duplex Stream
// import http from 'http';

// const server = http.createServer((req, res) => {
//   res.statusCode=200;
//   res.setHeader('Content/Type', 'text/html')
// });

// server.listen(8081, () => {
//   console.log('HTTP Server listening on port 8081');
// });


//Transform Stream Example
import { createGzip } from 'zlib';
import fs from 'fs';

const input = fs.createReadStream('largeFile.txt');
const output = fs.createWriteStream('largeFile.gz');

// Gzip transform stream se file ko compress kar rahe hain
const gzip = createGzip();
// const output1=toString(output);
input.pipe(gzip).pipe(output);


// fs ke methods do versions mein aate hain:

// Asynchronous (non-blocking) → e.g., fs.readFile

// Synchronous (blocking) → e.g., fs.readFileSync
