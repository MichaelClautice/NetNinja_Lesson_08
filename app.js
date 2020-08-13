const events = require('events');

const myEmitter = new events.EventEmitter();

myEmitter.on('mikesEvent', function(mssg){
    console.log(mssg);
});

myEmitter.emit('mikesEvent', 'Mikes Event Was Emitted');