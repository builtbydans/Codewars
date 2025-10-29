/*
You are given two sorted arrays that contain only integers. 
These arrays may be sorted in either ascending or descending order. 
Your task is to merge them into a single array, ensuring that:

The resulting array is sorted in ascending order.

Any duplicate values are removed, so each integer appears only once.
If both input arrays are empty, return an empty array.

No input validation is needed, as both arrays are guaranteed to contain zero or more integers.

*/

const mergeArrays = (arr1, arr2) =>
  [...new Set([...arr1, ...arr2])].sort((a, b) => a - b);

console.log(mergeArrays([1, 2, 3, 4, 5], [6, 7, 8, 9, 10]));
console.log(mergeArrays([1, 3, 6, 8, 9], [4, 2, 10, 7, 5]));
