console.log("Start");

setTimeout(function cb(){
    console.log("callback function");
},5000);

console.log("end");

let startTime = new Date().getTime();
let endTime = startTime;
while (endTime<startTime+10000){
    endTime = new Date().getTime();
}
console.log("while ended");

