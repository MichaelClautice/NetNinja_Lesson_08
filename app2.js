// Michael Clautice, Richmond, VA
// The Net Ninja - Node JS Tutorial for Beginners 
// Lesson 08 - The Node Event Emitter
//-----

const events = require('events');
const util = require('util');

var Person = function(name){
    this.name = name;
};

util.inherits(Person, events.EventEmitter);

var james = new Person('james');
var mary = new Person('mary');
var ryu = new Person('ryu');
var people = [james, mary, ryu];

people.forEach(function(person){
    person.on('speak', function(mssg){
        console.log(person.name + ' said: ' + mssg);
    })
});

james.emit('speak', 'hello dudes');
ryu.emit('speak', 'I want ice cream');