const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Operation completed!");
    }, 2000);
    console.log("hello world");
});

function callback(myPromise){
    console.log(myPromise);
}
myPromise.then(callback);