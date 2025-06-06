function promisifiedFunction(duration){
    const p = new Promise(function(resolve){
        setTimeout(resolve,duration);

    })
    return p;

}

//callback hell
/*
promisifiedFunction(1000).then(function(){
    console.log("first is done");
    promisifiedFunction(2000).then(function(){
        console.log("second one");
    });
    
})
    */


//promise chaining: used to fix callback hells
promisifiedFunction(1000).then(function(){
    console.log("first is done");
    return promisifiedFunction(2000)
}).then(function(){
        console.log("second one");
    });
    

