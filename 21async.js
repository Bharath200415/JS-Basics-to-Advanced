function findSum(n){
    let ans =0;
    for(let i=0;i<n;i++){
        ans+=i;
    }
    console.log(ans);
}

function findSumTill100(){
    return findSum(100);
}
setTimeout(findSumTill100,1000);
console.log("Hello world");
//common async functions are: setTimeOut, fs.readFile: to read a file from ur file system, Fetch: to fetch some data from an API endpoint