const fs = require("fs");
//filesystem module


//this is an asynchronous call
fs.readFile("a.txt","utf-8",function(err,data){
    console.log(data);
})

console.log("Hi"); //this will be printed first as it isnt async