/*
const users = '{"name": "Bharath","age":21,"gender":"male"}';
const user = JSON.parse(users);
console.log(user["gender"]);
*/
//instead of parse method we can do js do it automatically using stringify method

const user ={
    name:"harkirat",
    age:21,
    gender:"male"
}
const finalstring= JSON.stringify(user);
console.log(finalstring);
