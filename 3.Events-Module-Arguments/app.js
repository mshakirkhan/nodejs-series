const EventEmitter = require('events');
const emitter = new EventEmitter();

// Register a listner
emitter.on('messageLogged', (args) => {
    console.log("Listener Called", args);
});

// Raise an event
emitter.emit('messageLogged', {id: 1, url: "https://"} );

// Same example like Events Module we are just passing arguments and receiving it at register listner