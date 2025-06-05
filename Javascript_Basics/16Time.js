const currentDate = new Date();
function calSum(){
    let sum = 0;
    for (let i=0;i<1000000;i++){
        sum=sum+i;

    }
    console.log(sum);
}

const beforeDate = new Date();
const beforeTime = beforeDate.getTime(); //gets the Epoch time

calSum();

const afterDate = new Date();
const afterTime = afterDate.getTime();

console.log("the time taken: ",afterTime-beforeTime);
