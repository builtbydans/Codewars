// Given an integer, return a string with dash '-' marks before and after each odd
// digit, but do not begin or end the string with a dash mark.

// Ex:

// 274 -> '2-7-4'
// 6815 -> '68-1-5'

export function dashatize(num: number): string {
  if (isNaN(num)) return "NaN";

  const nums = String(Math.abs(num)).split("");
  const dashed: string[] = [];

  for (let i = 0; i < nums.length; i++) {
    if (+nums[i] % 2 === 0) {
      dashed.push(nums[i]);
    } else {
      dashed.push("-" + nums[i] + "-");
    }
  }

  let result = dashed.join("");

  result = result.replace(/--/g, "-");

  if (result.startsWith("-")) result = result.slice(1);
  if (result.endsWith("-")) result = result.slice(0, -1);

  return result;
}

console.log(dashatize(274));
console.log(dashatize(6815));
