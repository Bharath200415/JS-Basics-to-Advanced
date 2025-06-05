let a = 30;
function counter(){
    if (a>=0){
        console.log(a);
        a--;
        setTimeout(counter,1000);
    }else{
        console.log("Time's up!");
    }
}

counter();
