 
import { EventEmitter } from 'events'; // ES module
// OR
// const EventEmitter = require('events');  CommonJS

// ✅ 1. Create an EventEmitter Instance
const eventEmitter = new EventEmitter();


// ✅ 2. Listen to an Event
eventEmitter.on('greet', () => {
  console.log('Hello Haseeb!');
});


// ✅ 3. Emit (Trigger) the Event
eventEmitter.emit('greet');  // Output: Hello Haseeb!


// 🔁 Repeatable Example:
eventEmitter.on('order', (item) => {
  console.log(`Order received for: ${item}`);
});
eventEmitter.emit('order', 'Biryani 🍛');
eventEmitter.emit('order', 'Pizza 🍕');



//Inbuilt Events
import fs from 'fs';
const stream = fs.createReadStream('example.txt', 'utf8');
stream.on('data', (chunk) => {
  console.log('Chunk mil gaya:', chunk);
});
stream.on('end', () => {
  console.log('File read complete');
});


// fs.createReadStream()	File ka data stream ki tarah read karta hai (chunk by chunk)
// 3000	Port number — Node.js app is port pe listen karta hai for requests

// ✅ Real-World Use Case:
// Server requests

// User actions (login, logout, file upload)

// Chat apps (message receive/send)