/*
Simple, given a string of words, return the length of the shortest word(s).
String will never be empty and you do not need to account for different data types.
*/

const findShortSort = (s) => {
  return s.split(" ").sort((a, b) => a.length - b.length)[0].length;
};

const findShortReduce = (s) => {
  return s
    .split(" ")
    .reduce(
      (shortest, word) => (word.length < shortest ? word.length : shortest),
      Infinity
    );
};

console.log(
  findShortSort("bitcoin take over the world maybe who knows perhaps")
);
console.log(
  findShortSort(
    "turns out random test cases are easier than writing out basic ones"
  )
);
console.log(findShortSort("Let's travel abroad shall we"));

console.log(
  findShortReduce("bitcoin take over the world maybe who knows perhaps")
);
console.log(
  findShortReduce(
    "turns out random test cases are easier than writing out basic ones"
  )
);
console.log(findShortReduce("Let's travel abroad shall we"));
