function square(n1){
    return n1*n1;
}

function cube(n2){
    return n2*n2*n2;
}


function calculate(n1,fnToCall){
    const ans = fnToCall(n1);
    console.log(ans);
}

calculate(2,cube);
