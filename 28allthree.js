//Callback syntax:

/*function bharathsAsyncfn(callback){
    callback("hi there!");
}

async function main(){
    bharathsAsyncfn(function(value){
        console.log(value);
    })
}
main();
*/

//promise then syntax:
function bharathsAsyncfn(){
    let p = new Promise(function(resolve){
        resolve("hi there");

    });
    return p;
}
function main(){
    let value = bharathsAsyncfn().then(function(value){
        console.log(value);
    });
}
main();