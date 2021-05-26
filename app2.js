// Michael Clautice, Richmond, VA
// The Net Ninja - NodeJS Tutorial for Beginners 
// Lesson 08 - The Node Event Emitter
//-----

// req events module
const events = require('events');
// req util module
const util = require('util');

// create a Person obj that will have a name
var Person = function(name){
    this.name = name;
};

// util's inherits( ) method incs 2 params:
// 1 - who will b inheriting;
// obj cnstrctr Person
// 2 - what it will b inheriting:
// The event module’s EventEmitter */
util.inherits(Person, events.EventEmitter);

// create 3 instantiations of Person
var Joe = new Person('Joe');
var Mary = new Person('Mary');
var Ryu = new Person('Ryu');
// create an array of the Person objs
var people = [Joe, Mary, Ryu];

// for ea of th Person objs in th array...
people.forEach(function(person){
// that Person will emit a speak event and...
    person.on('speak', function(mssg){
// that Person's mssg will be con.logged
        console.log('\n');
        console.log(person.name + ' said: ' + mssg);
    })
});

// 2 Person objs emit custom events that will be acted on...
// aalong w their str mssgs
Joe.emit('speak', '\nHello dudes!');
Ryu.emit('speak', '\nI want ice cream NOW!!\n');

