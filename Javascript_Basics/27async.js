function bharathsAsyncfn(){
    let p = new Promise(function(resolve){
        setTimeout(function(){
            resolve("Hi there!");

        },3000)

        
    });
    return p;

}

async function main(){
    let value = await bharathsAsyncfn(); //await is only valid in an async function
    console.log(value);


}
main();
console.log("after main");