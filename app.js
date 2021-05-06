// Michael_Clautice, Richmond, VA
// The Net Ninja - Node JS Tutorial for Beginners 
// Lesson 08 - The Node Event Emitter
//---------
const events = require("events");

const mikesEmitter = new events.EventEmitter();

mikesEmitter.on("mikesCustomEvent", function(mssg){
    console.log(mssg);
});

mikesEmitter.emit("mikesCustomEvent", "Mikes custom event was emitted & the message is Tip Your Bartender!");