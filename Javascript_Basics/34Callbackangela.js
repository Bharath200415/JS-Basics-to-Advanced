function anotherEventListener(typeofEvent,callback){
    var eventthatHappened = {
        eventType: "keydown",
        key: "p",
        durationOfKeypress: 2
    }
    if (eventthatHappened.eventType == typeofEvent){
        callback(eventthatHappened);
    }
}

anotherEventListener("keydown",function(event){
    console.log(event);
});
