// Michael Clautice, Richmond, VA
// The Net Ninja - NodeJS Tutorial for Beginners 
// Lesson 08 - The Node Event Emitter
//-----

const events = require('events');

const myEmitter = new events.EventEmitter();

myEmitter.on('mikesEvent', function(mssg){
    console.log(mssg);
});

myEmitter.emit('mikesEvent', 'Mikes event was emitted');

