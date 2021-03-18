const EventEmitter = require('events');

class Logger extends EventEmitter{
    log(arg){
        console.log(arg);
        this.emit('loggedMsg', {githubName: "mshakirkhan", userName: "Muhammad Shakir Khan"});
    }
}

module.exports = Logger;

// Important Points
// 1. Class is ES6 feather.
// 2. First letter of class should be capital.
// 3. We don't need to write function keyword before making method.
// 4. Function inside the class will be called Method.
// 5. Extends keyword is used for inheritance.
// 6. this keyword is referering current class.