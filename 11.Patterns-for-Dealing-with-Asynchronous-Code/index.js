console.log("First");
getUsers(1, (users)=> {
    console.log("Users Data: ", users);
})
console.log("Third");

function getUsers(users, callback)
{
    setTimeout(()=>{
        console.log("Fetching records from Database...");
        callback({id: users, githubName: "mshakirkhan"})
    },2000);
}

// There are three pattren to deal with async code:

// 1. Call back
// 2. Promises
// 3. Async/await