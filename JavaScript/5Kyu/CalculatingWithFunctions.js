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

const zero = (op) => (!op ? 0 : op(0));
const one = (op) => (!op ? 1 : op(1));
const two = (op) => (!op ? 2 : op(2));
const three = (op) => (!op ? 3 : op(3));
const four = (op) => (!op ? 4 : op(4));
const five = (op) => (!op ? 5 : op(5));
const six = (op) => (!op ? 6 : op(6));
const seven = (op) => (!op ? 7 : op(7));
const eight = (op) => (!op ? 8 : op(8));
const nine = (op) => (!op ? 9 : op(9));

const plus = (right) => {
  return function (left) {
    return left + right;
  };
};

const minus = (right) => {
  return function (left) {
    return left - right;
  };
};

const times = (right) => {
  return function (left) {
    return left * right;
  };
};

const dividedBy = (right) => {
  return function (left) {
    return Math.floor(left / right);
  };
};

console.log(seven(times(five()))); // 35
console.log(four(plus(nine()))); // 13
