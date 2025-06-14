//given an array, give me back a new array in which each value is multiplied by 2

//Method 1:
const input = [1,2,3,4];
const newArray=[];


for (let i= 0;i<input.length;i++){
    newArray.push(input[i]*2);

}
console.log(newArray);


//this is what we can do alternatively using map tho it does the same above mentioned thing 
//method 2:
function transform(i){
    return i*2;
}

const ans = input.map(transform);
console.log(ans);


//pull out all the even values from an given array and log it as output 
//we can use filter to do this shi
function transformeven(i){
    if (i%2==0){
        return true;
    }else{
        return false;
    }
}

const newans = input.filter(transformeven);
console.log(newans);


