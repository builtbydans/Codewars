/*
Write a function that takes an array of integers and returns the first duplicate number — 
the first value that appears twice when reading the array from left to right.

If no duplicates exist, return undefined.

Your algorithm should run in O(n) time complexity and O(n) space complexity using an appropriate 
data structure for constant-time lookups.
*/

const firstDuplicate = (numbers) => {
  const seen = new Map();

  for (let i = 0; i < numbers.length; i++) {
    if (seen.has(numbers[i])) {
      return numbers[i];
    } else {
      seen.set(numbers[i], i);
    }
  }
};

console.log(firstDuplicate([4, 7, 2, 7, 3, 4]));
// → 7  (7 is the first number to appear twice)
console.log(firstDuplicate([1, 2, 3, 4, 5]));
// → undefined  (no duplicates)
console.log(firstDuplicate([5, 5, 3, 2, 5]));
// → 5  (5 appears twice right at the start)
console.log(firstDuplicate([10, 20, 10, 20, 30]));
// → 10  (10 is the first repeated number)
console.log(firstDuplicate([9, 8, 7, 6, 5, 4, 3, 2, 1, 9]));
// → 9  (first element repeats at the end)
