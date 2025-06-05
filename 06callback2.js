function calArithmetic(a,b,finalFunc){
    const ans = finalFunc(a,b);
    return ans;
}
function sum(a,b){
    return a+b;
}
const value = calArithmetic(1,2,sum);
console.log(value);

//call-back in simple terms is passing functions inside functions 