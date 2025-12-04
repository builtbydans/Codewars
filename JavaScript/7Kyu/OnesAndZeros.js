const binaryArrayToNumber = (arr) => {
  let x = arr.join("");
  return parseInt(x, 2);
};

console.log(binaryArrayToNumber([0, 0, 0, 1])); // 1
console.log(binaryArrayToNumber([1, 0, 0, 1])); // 9
console.log(binaryArrayToNumber([1, 0, 1, 1])); // 11
console.log(binaryArrayToNumber([1, 0, 0, 1, 0])); // 42
