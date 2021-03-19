const fs = require('fs');

// Sync Method
const files = fs.readdirSync('./');
console.log(files);

// Async Method
fs.readdir('./', (err, files) =>{
    if(err) console.log("Error: ", err);
    else console.log(files);
});

// Important Points

// 1. Alomst every operations write here comes into two forms Sync or blocking and aSync or non-blocking.
// 2. We should avoid using syn method.
// 3. In real world application we should async method because these are non blocking.
// 4. Node process has a single thread if you are using node to build the backend of application we might have hundred of connecting to backend if you keep that single thread busy you won't be able to serve main lines so always use async methods.