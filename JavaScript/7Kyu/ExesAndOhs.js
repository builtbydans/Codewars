/*
Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

Examples input/output:

XO("ooxx") => true
XO("xooxx") => false
XO("ooxXm") => true
XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
XO("zzoo") => false
*/

const XO = str => {
  const split = str.toLowerCase().split("");
  const x = split.filter((letter) => letter == 'x');
  const o = split.filter((letter) => letter == 'o');

  return x.length == o.length;
}

console.log(XO("xo'"));
console.log(XO("XO"));
console.log(XO("xxxoo"));
console.log(XO("xxOo"));
console.log(XO("zpzpzpp"))
console.log(XO(''));