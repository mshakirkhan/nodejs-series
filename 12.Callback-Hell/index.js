console.log("First");
getUsers(1, (user)=> {
    console.log(user);
    getRepo(user.githubName, (repo)=>{
        console.log(repo);
        getCommits(repo, (commits) => {
            console.log(commits);
        });
    });
});
console.log("Third");

function getUsers(users, callback)
{
    setTimeout(()=>{
        console.log("Fetching records from database ...")
        callback({id: users, githubName: "mshakirkhan"})
    },2000);
}

function getRepo(username, callback){
    setTimeout(()=>{
        console.log("Fetching records from database ...")
        callback(["Repo1","Repo2","Repo3"])
    },2000);
}

function getCommits(username, callback){
    setTimeout(()=>{
        console.log("Fetching records from database ...")
        callback(["Commit One","Commit Two","Commit Three"])
    },2000);
}

// This is the example fo callback hell