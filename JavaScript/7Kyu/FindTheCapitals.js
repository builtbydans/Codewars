/*
    Write a function that takes a single non-empty string of only lowercase and uppercase ascii 
    letters (word) as its argument, and returns an ordered list containing the indices of 
    all capital (uppercase) letters in the string.

    "CodEWaRs" --> [0,3,4,6]
*/

const capitals = (word) => {
  let indexes = [];
  for (let i = 0; i < word.length; i++) {
    if (word[i] == word[i].toUpperCase()) {
      indexes.push(i);
    }
  }
  return indexes;
};

console.log(capitals("CodEWaRs")); // [0,3,4,6]
