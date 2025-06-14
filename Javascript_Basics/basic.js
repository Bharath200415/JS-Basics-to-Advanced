/*
function Timer(duration){
    if (duration>0){
        console.log(duration);
        duration--;
        setTimeout(Timer,1000);
    }else{
        console.log("Time's up!");
    }
}
*/

function newTimer(){
    let duration = 30;
    for (let i=duration;i>=0;i--){
        setTimeout(function(){
            console.log(i);
            
        },(duration-i)*1000);

    }
    

}
newTimer();
