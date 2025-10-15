/*
This time we want to write calculations using functions and get the results. 
Let's have a look at some examples:

seven(times(five()));   //  must return 35
four(plus(nine()));     //  must return 13
eight(minus(three()));  //  must return 5
six(dividedBy(two()));  //  must return 3

Requirements:
There must be a function for each number from 0 ("zero") to 9 ("nine")
There must be a function for each of the following mathematical operations: plus, minus, times, dividedBy
Each calculation consist of exactly one operation and two numbers
The most outer function represents the left operand, the most inner function represents the right operand
Division should be integer division. For example, this should return 2, not 2.666666...:
eight(dividedBy(three()));

*/

const zero = () => 0;
const one = () => 1;
const two = () => 2;
const three = () => 3;
const four = () => 4;
const five = () => 5;
const six = () => 6;
const seven = () => 7;
const eight = () => 8;
const nine = () => 9;

const plus = () => {};
const minus = () => {};
const times = () => {};
const dividedBy = () => {};

console.log(seven(times(five()))); // 35
console.log(four(plus(nine()))); // 13
