console.log("hello world");

// const sum = (a, b) => a + b;
// console.log(sum(10, 20));

// console.log(process.argv);

// const number = process.argv;
// console.log(number);

// const double = (num) => num * 2;
// console.log(double(number[2]));

const [, , number1] = process.argv;
const double = (num) => num * 2;
console.log(double(number1));
