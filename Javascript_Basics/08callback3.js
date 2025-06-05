function sum(n1,n2,fntopass){
    let result=n1+n2;
    return fntopass(result);
}

function displayresult(data){
    console.log("result of the sum is: "+data);
}

sum(1,2,displayresult);
