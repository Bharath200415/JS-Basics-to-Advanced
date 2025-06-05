const initialArray=[1,2,3];
initialArray.shift(); //pops from the start of the array
initialArray.push(4);
initialArray.pop();
initialArray.unshift(1); //push in the beginning
console.log(initialArray);

const arr1=[1,2,3];
const arr2=[4,5,6];
console.log("new concatenated array: ",arr1.concat(arr2));

//does the same thing:
for (let i=0;i<arr2.length;i++){
    arr1.push(arr2[i]);
}
console.log(arr1);

let num1 = 1;
function logThing(str){
    console.log("call  number"+num1+": "+str);
    num1=num1+1;
}
//foreach is an callback function, will basically call the specified function in the argument one by one for each character in the string
arr1.forEach(logThing);







 



