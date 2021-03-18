const Logger = require('./logger');
const logger = new Logger();

// Register a listener

logger.on('loggedMsg', (arg) => {
    console.log(arg);
});

logger.log("This is my message");

// Important Points
// 1. We are creating object of logger class in line no 2.