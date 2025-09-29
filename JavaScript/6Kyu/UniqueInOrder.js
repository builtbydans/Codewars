/*
    Implement the function unique_in_order which takes as argument a sequence and returns a list of items 
    without any elements with the same value next to each other and preserving the original order of elements.

    For example:

    uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
    uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
    uniqueInOrder([1,2,2,3,3])       == [1,2,3]
*/

const uniqueInOrderWithLoop = (param) => {
  const result = [];
  for (let i = 0; i < param.length; i++) {
    if (!result.length || param[i] !== result[result.length - 1]) {
      result.push(param[i]);
    }
  }
  return result;
};

const uniqueInOrderHOF = (param) => {
  return Array.from(param).reduce((acc, curr) => {
    if (acc.at(-1) != curr) {
      acc.push(curr);
    }
    return acc;
  }, []);
};

console.log(uniqueInOrderWithLoop("AAAABBBCCDAABBB"));
console.log(uniqueInOrderWithLoop("ABBCcAD"));
console.log(uniqueInOrderWithLoop([1, 2, 2, 3, 3]));
console.log(uniqueInOrderHOF("AAAABBBCCDAABBB"));
console.log(uniqueInOrderHOF("ABBCcAD"));
console.log(uniqueInOrderHOF([1, 2, 2, 3, 3]));
