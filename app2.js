// Michael Clautice, Richmond, VA
// The Net Ninja - Node JS Tutorial for Beginners 
// Lesson 08 - The Node Event Emitter
//-------
// req mods
const events = require('events');
const util = require('util');

// create a Person obj
var Person = function(name){
    this.name = name;
};


// use the util mod to inherit the eventsEmitter
util.inherits(Person, events.EventEmitter);

// create 3 new people
var james = new Person('james');
var mary = new Person('mary');
var ryu = new Person('ryu');

// create an array of those 3 people
var people = [james, mary, ryu];

// for ea person in the array 
// when they emit a speak event, 
// console.log a str mssg 
// that announces their mssg
people.forEach(function(person){
    person.on('speak', function(mssg){
        console.log(person.name + ' screamed: ' + mssg);
    })
});
// this app now listens for an emitted custom event from a person object
// along w that person's mssg
console.log("•••••••••••");
james.emit('speak', 'hello dudes!');
console.log("•••••••••••");
ryu.emit('speak', 'I want yogurt!');
console.log("•••••••••••");