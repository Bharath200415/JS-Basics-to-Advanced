function sum(num1,num2,fnToCall){
    let result = num1+num2;
    fnToCall(result);
}

function displayResult(data){
    console.log("Result of the sum is: "+data);
}
const ans = sum(1,2,displayResult);
//using this callback concept we called two functions in a single function call
