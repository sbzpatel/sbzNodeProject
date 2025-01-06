let a = 20;
let b = 0;

// setTimeout(() => {
//     b = 30;
// }, 2000);

let waitingData = new Promise((resolve, reject) => {
    setTimeout(() => {
        // b = 30;
        resolve(30);
    }, 2000);
});

waitingData.then((data) => {
    b = data;
    console.log(a+b);
});

// console.log(a+b);