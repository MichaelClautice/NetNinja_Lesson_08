// Michael Clautice, Richmond, VA
// The Net Ninja - NodeJS Tutorial for Beginners 
// Lesson 08 - The Node Event Emitter
//-----

// req events mod
const events = require('events');
// create an instantiation of events.EventEmitter()
const myEmitter = new events.EventEmitter();

// use th on( ) event handler to handle a custom event named mikesEvent
// when it receives mikesEvent it will console.log a message
myEmitter.on('mikesEvent', function(mssg){
    console.log(mssg);
});

// this statement emits a custom event w a mssg as an arg
myEmitter.emit('mikesEvent', '\nMikes event was emitted!\n');

