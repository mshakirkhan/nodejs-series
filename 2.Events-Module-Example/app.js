const EventEmitter = require('events');
const emitter = new EventEmitter();

// Register a listner
emitter.on('messageLogged', function(){
    console.log("Listener Called");
});

// Raise an event
emitter.emit('messageLogged');