//function statement aka function declaration
function a(){
    console.log("a called");
}


//function Expression
var b = function(){
    console.log("hello world");
}
b();  //calling the function


//Anonymous Function->function without a name, used where functions are used as values
setTimeout(function(){ //this is a anonymous function
    console.log("hello");
},2000);


//these are parameters which are passed onto the function header
function x(param1, param2){
    console.log("hi");
}

x("hi","bharath"); //these are arguments


//First class functions === first class citizens
//The ability of functions to be used in as values and be assigned into a variable/passed into a function 
function cube(n2){
    return n2*n2*n2;
}
function calculate(n1,fnToCall){
    const ans = fnToCall(n1);
    console.log(ans);
}

calculate(2,cube);
