/*

Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. 
No floats or non-positive integers will be passed.

For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.

[10, 343445353, 3453445, 3453545353453] should return 3453455.

*/

const sumTwoSmallestNumbers = (num) =>
  num
    .sort((a, b) => a - b)
    .slice(0, 2)
    .reduce((a, b) => a + b);

// ALTERNATIVE OPTION FOR O(n)

const sumTwoSmallestNumbers2 = (numbers) => {
  let smallest = Infinity;
  let secondSmallest = Infinity;

  for (let num of numbers) {
    if (num < smallest) {
      secondSmallest = smallest;
      smallest = num;
    } else if (num < secondSmallest) {
      secondSmallest = num;
    }
  }
  return smallest + secondSmallest;
};

console.log(sumTwoSmallestNumbers([5, 8, 12, 19, 22]));
console.log(sumTwoSmallestNumbers([15, 28, 4, 2, 43]));
console.log(sumTwoSmallestNumbers([3, 87, 45, 12, 7]));
console.log(sumTwoSmallestNumbers([23, 71, 33, 82, 1]));
console.log(sumTwoSmallestNumbers([52, 76, 14, 12, 4]));
console.log(sumTwoSmallestNumbers([1, 2, 3, 4, 5, 6, 1]));
