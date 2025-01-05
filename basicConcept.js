var a = 20;
let myName = "Shahbaz Patel";
let bff = "Kaleem Patel";
var friends = [
    "Shahbaz",
    "Kaleem",
    "Ilham",
    "Maghfir"
];

var myNumbers = [2, 6, 8, 10, 5, 50, 99, 33, 56, 19];

bff = "Shahbaz Shaikh";

console.log(myName + "!!!");
console.warn("a=" + a);

console.log(bff);

console.log(friends);

var newMyNumbers = myNumbers.filter((item) => {
    return item > 10;
})

console.log(newMyNumbers);