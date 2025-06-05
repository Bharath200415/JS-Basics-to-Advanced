const dog = {
    name:"doggie",
    legcount:4,
    speaks:"barks"
};
const cat = {
    name:"Bharath",
    legcount:4,
    speaks:"meow"
};

//console.log("animal "+dog["name"]+" "+dog["speaks"]+" with "+dog["legcount"]+" legs");

function printstr(animal){
    console.log("animal "+animal["name"]+" "+animal["speaks"]);
}
printstr(dog);