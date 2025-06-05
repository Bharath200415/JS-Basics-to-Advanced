function findIndexof(str,target){
    console.log("original string:",str);
    console.log("Index:",str.indexOf(target));
    console.log("last Index: ",str.lastIndexOf(target));

}
findIndexof("My name is is Bharath","is");
findIndexof("Hello World World","World");


function getSlice(str,start,end){
    console.log("Original string:",str);
    console.log("After slicing:",str.slice(start,end));

}
getSlice("Hellowwww",0,3);

const str="hello world";
//Syntax: str.replace("target,"replacement");
console.log(str.replace("world","java"));
const value = "hi my name is Bharath";
const words = value.split("h");
console.log(words)


//trim: trims out the space in left and right side of the string
const value2="  Hello world   ";
console.log(value2.trim());

console.log(value2.toUpperCase());

