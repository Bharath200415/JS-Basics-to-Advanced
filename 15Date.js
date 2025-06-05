const currentDate = new Date();

let todaysDate=currentDate.getDate();
let currentMonth = currentDate.getMonth(); //months are zero indexed thus we add 1
let currentYear = currentDate.getFullYear();
console.log(`${todaysDate}/${currentMonth+1}/${currentYear}`);
console.log("current Time: "+currentDate.getHours()+":"+currentDate.getMinutes()+":"+currentDate.getSeconds());
