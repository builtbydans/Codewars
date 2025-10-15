/*

    Complete the solution so that it strips all text that follows any of a set of comment markers passed in. Any whitespace at the end of the line should also be stripped out.

    Example:

    Given an input string of:

    apples, pears # and bananas
    grapes
    bananas !apples
    The output expected would be:

    apples, pears
    grapes
    bananas

*/

// WORK IN PROGRESS - DOES NOT PASS ALL TESTS
const solution = (text, markers) => {
  if (!markers.length) return text.trim();

  const lines = text.split("\n");
  const cleaned = [];

  for (let line of lines) {
    for (const marker of markers) {
      const index = line.indexOf(marker);
      if (index !== -1) {
        line = line.slice(0, index);
      }
    }
    cleaned.push(line.trim());
  }
  return cleaned.join("\n");
};

console.log("1: " + solution("aa bb cc", [])); // aa bb cc
console.log("2: " + solution(" aa # bb # cc ", [])); // aa # bb # cc
console.log("3: " + solution("aa bb cc", ["#"])); // aa bb cc
console.log("4: " + solution("#aa bb\n!cc dd", ["#", "!"])); // '\n'
console.log("5: " + solution("aa bb\ncc ! dd", ["#", "!"])); // 'aa bb\ncc'
