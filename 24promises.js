const fs= require('fs');

function bharathsReader(){
    console.log("inside reader file");
    return new Promise(function(resolve){ //we can name the argument something else but it is necessary to have a function with the argument 
        console.log("inside promise");
        fs.readFile("a.txt","utf-8",function(err,data){
            console.log("before resolve");
            resolve(data);

        });
    });
}

function onData(data){
    console.log(data);
}

bharathsReader().then(onData);
