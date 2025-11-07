/*
Create a method to see whether the string is ALL CAPS
*/

const isUpperCase = (str) => str == str.toUpperCase();

console.log(isUpperCase("c"));
console.log(isUpperCase("C"));
console.log(isUpperCase("hello I AM DONALD"));
console.log(isUpperCase("HELLO I AM DONALD"));
