function bharathsAsyncfn(){
    let p = new Promise(function(resolve){
        resolve("hi there!");
    });
    return p;

}

function main(){
    bharathsAsyncfn().then(function(value){
        console.log(value);
    });
}
main();
