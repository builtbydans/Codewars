/*

When provided with a letter, return its position in the alphabet.
Input :: "a"

Output :: "Position of alphabet: 1"
Note: Only lowercased English letters are tested

*/

const position = (letter) => {
  return `Position of alphabet: ${letter.charCodeAt() - 96}`;
};

console.log(position("a")); // 1
console.log(position("z")); // 26
console.log(position("m")); // 13
