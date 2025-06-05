/*
var d = new Promise(function(r){
    r("bruh");
});

function callback(){
    console.log(d);
}
d.then(callback);
*/

var d = new Promise(function(r){
    setTimeout(function(){
        r("foo");
    },1000)
});

function callback(){
    console.log("inside callback");
    console.log(d);

}

console.log(d);
d.then(callback);
