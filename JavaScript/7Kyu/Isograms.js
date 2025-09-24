/*
    An isogram is a word that has no repeating letters, consecutive or non-consecutive. 
    Implement a function that determines whether a string that contains only letters is an isogram. 
    Assume the empty string is an isogram. Ignore letter case.

    Example: (Input --> Output)

    "Dermatoglyphics" --> true
    "aba" --> false
    "moOse" --> false (ignore letter case)
*/

const isIsogram = (str) =>
  [...new Set(str.toLowerCase().split(""))].join("") == str.toLowerCase();

const topAnswer = (str) => new Set(str.toUpperCase()).size == str.length; // top answer on Codewars. On reflection, makes much more sense to check that Set length matches original str.

const chatGPT = (str) => {
  const set = new Set();

  for (let char of str.toLowerCase()) {
    if (set.has(char)) {
      return false;
    } else {
      set.add(char);
    }
  }
  return true;
};

console.log(isIsogram("Dermatoglyphics"));
console.log(isIsogram("isogram"));
console.log(isIsogram("m"));
console.log(isIsogram("moOse"));
console.log(isIsogram("isIsogram"));
console.log(isIsogram(""));

console.log("-");

console.log(chatGPT("Dermatoglyphics"));
console.log(chatGPT("isogram"));
console.log(chatGPT("m"));
console.log(chatGPT("moOse"));
console.log(chatGPT("isIsogram"));
console.log(chatGPT(""));
