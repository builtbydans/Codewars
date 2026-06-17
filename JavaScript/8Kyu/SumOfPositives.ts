/*
  You get an array of numbers, return the sum of all of the positives ones.

  Example
  [1, -4, 7, 12] =>
  1
  +
  7
  +
  12
  =
  20
  1+7+12=20

  Note
  If there is nothing to sum, the sum is default to 0.

*/

export function positiveSum(arr: number[]): number {
  return arr.reduce((acc, curr) => (curr > 0 ? acc + curr : acc), 0);
}

console.log(positiveSum([1, 2, 3, 4, 5])); // 15
console.log(positiveSum([1, -2, 3, 4, 5])); // 13
console.log(positiveSum([-1, -2, -3, -4, -5])); // 0
console.log(positiveSum([])); // 0
