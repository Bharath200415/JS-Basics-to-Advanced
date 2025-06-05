const delay = 1000; // intended delay in milliseconds (1 second)
const start = Date.now(); // record time before setTimeout

/*setTimeout(() => {
    const end = Date.now(); // time when the function actually runs
    const actualDelay = end - start;

    console.log(`Expected delay: ${delay}ms`);
    console.log(`Actual delay:   ${actualDelay}ms`);
}, delay);
*/

setTimeout(function(){
    const end=Date.now();
    const actualDelay=end-start;
    console.log("expected delay:"+delay+"ms");
    console.log("actual delay:"+actualDelay+"ms");
},delay);
