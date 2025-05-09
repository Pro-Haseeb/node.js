import { EventEmitter } from 'node:events';

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();
myEmitter.on('war', () => {
  console.log('India na Rocket hamla kiya Pakistan pr');
  setTimeout(() => {
    console.log("Pakistan na India ka 5 Tiyyara gira diya");
  }, 3000);
});
console.log("Every one is living peacefully : -)");

myEmitter.emit('war');