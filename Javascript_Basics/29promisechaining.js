//writing a function which returns a promise
function  promisifiedsetTimeout(duration){
    const p = new Promise(function(resolve){
        setTimeout(function(){
            resolve();
        },duration);
    });
    return p;
}

//calling a function which returns a promise
const ans = promisifiedsetTimeout(2000);
ans.then(function(){
    console.log("the timer is done");
});
