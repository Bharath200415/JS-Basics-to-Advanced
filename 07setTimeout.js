function greet(firstName="Bharath"){
    console.log("Hello "+firstName);

}
setTimeout(greet,5*1000); //gets printed after 5seconds
greet(); //this gets printed instantly

setInterval(greet,1*1000); //calls continuously after one second

