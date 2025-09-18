/*

Given a string of words, you need to find the highest scoring word.
Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

For example, the score of abad is 8 (1 + 2 + 1 + 4).

You need to return the highest scoring word as a string.
If two words score the same, return the word that appears earliest in the original string.

All letters will be lowercase and all inputs will be valid.

*/

// Original
const high = (x) => {
  let highest = 0;
  let highestWord = "";
  let y = x.split(" ");

  for (let i = 0; i < y.length; i++) {
    let split = y[i].split("");
    let mapToNum = split.map((x) => x.toLowerCase().charCodeAt(0) - 97 + 1);
    highest = mapToNum.reduce((acc, sum) => acc + sum, 0);
    if (b > highest) {
      highest = b;
      highestWord = y[i];
    }
  }
  return highestWord;
};

// Refactored
const refactoredHigh = (x) => {
  const score = (word) =>
    [...word].reduce((sum, char) => sum + char.charCodeAt(0) - 96, 0);

  return x
    .split(" ")
    .reduce((best, word) => (score(word) > score(best) ? word : best));
};

console.log(high("man i need a taxi up to ubud"));
console.log(high("what time are we climbing up the volcano"));
console.log(high("take me to semynak"));
console.log(high("aa b"));
console.log(high("b aa"));
console.log(high("bb d"));
console.log(high("d bb"));
console.log(high("aaa b"));

a = 1;
b = 2;
c = 3;
d = 4;
e = 5;
f = 6;
g = 7;
h = 8;
i = 9;
j = 10;
l = 11;
m = 12;
n = 13;
o = 14;
p = 15;
q = 16;
r = 17;
s = 18;
t = 19;
u = 20;
v = 21;
w = 22;
x = 23;
y = 24;
z = 25;

// taxi = 19 + 1 + 24 + 9 = 53
// ubud = 21 + 2 + 21 + 4 = 48
