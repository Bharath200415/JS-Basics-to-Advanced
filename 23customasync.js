const fs = require('fs');

function bharathsReader(cb){
    fs.readFile("a.txt","utf-8",function(err,data){
        cb(data);
    })
}
function onData(data){
    console.log(data);
}

bharathsReader(onData);