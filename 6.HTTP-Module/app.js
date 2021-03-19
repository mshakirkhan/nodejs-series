const http = require('http');
const server = http.createServer((req, res) => {
    if(req.url === '/'){
        res.write("Welcome my name is Muhammad Shakir Khan");
        res.end();
    }

    if(req.url === '/api/countries'){
        res.write(JSON.stringify(["Pakistan", "USA", "UAE"]));
        res.end();
    }
});

server.listen(3000);
console.log("Port is listening 3000");

// Important Points

// 1. HTTP modules is for creating newtworking application.
// 2. We can create web servers, we can easily create backend service for client application.
// 3. We have all the capibalities of event emitter in http by default.
// 4. In this example we are creating web servers.
// 5. In real world application we will not use http the reason is if we define more routes it will be complicated. Instead we will use frawork Express which give application the clean structure to handle various routes.
// 5. In future we will be using express framework is build on http module in node.