export function arrayDiff(a: number[], b: number[]): number[] {
  return a.filter((item) => !b.includes(item));
}

console.log(arrayDiff([3, 4], [3])); // [4]
console.log(arrayDiff([1, 2, 2, 2, 3], [2])); // [1,3]
