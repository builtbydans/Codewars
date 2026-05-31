export function getLengthOfMissingArray(arrayOfArrays: any[][]): number {
  if (!arrayOfArrays || arrayOfArrays.length === 0) return 0;

  const lengths: number[] = [];

  for (const arr of arrayOfArrays) {
    if (!arr || arr.length === 0) return 0;
    lengths.push(arr.length);
  }

  lengths.sort((a, b) => a - b);

  for (let i = 0; i < lengths.length - 1; i++) {
    if (lengths[i + 1] !== lengths[i] + 1) {
      return lengths[i] + 1;
    }
  }

  return 0;
}

console.log(
  getLengthOfMissingArray([[1, 2], [4, 5, 1, 1], [1], [5, 6, 7, 8, 9]]), // 3,
);

console.log(
  getLengthOfMissingArray([[5, 2, 9], [4, 5, 1, 1], [1], [5, 6, 7, 8, 9]]), // 2
);

console.log(
  getLengthOfMissingArray([]), // 0
);

console.log(getLengthOfMissingArray([[null], [null, null, null]])); // 2
