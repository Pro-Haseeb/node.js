const path = require('path');
const a1 = path.basename('E:\\Haseeb Files\\node js\\second.js');
const a2 = path.dirname('E:\\Haseeb Files\\node js\\second.js'); 
const a3 = path.extname('E:\\Haseeb Files\\node js\\second.js');

// console.log(a1);
// console.log(a2);
// console.log(__filename, a3);
console.log(__filename);

const fullPath = path.join(__dirname, 'folder', 'file.txt');
console.log(fullPath);

 // Summary : -
// fs files handle karta hai

// path file/folder ke paths banane me madad karta hai

// Dono aksar saath-saath use hote hain


