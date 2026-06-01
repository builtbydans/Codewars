export function pyramid(n: number): Array<Array<Number>> {
  const arr: any[] = new Array();

  for (let i = 0; i < n; i++) {
    const arr1: any[] = new Array(i + 1);
    arr1.fill(1);
    arr.push(arr1);
  }

  return arr;
}

// create the array we are going to push
// loop over n

console.log(pyramid(0));
console.log(pyramid(1));
console.log(pyramid(2));
console.log(pyramid(3));
