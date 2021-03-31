const p = new Promise((resolve, reject)=> {
   setTimeout(() => {
        // resolve(1);
        reject(new Error('message'));
   },2000)
});

p
.then(result => console.log('Result: ', result))
.catch(err => console.log(err.message));

// Important Points

// Promises is extreamly powerfull when we dealing with async code.
// Promises is an object that holds eventual result of an asynchronous operation.
// This object is one of the three states
// 1. Pending state.
// 2. Fulfilled.
// 3. Rejected state.