/* 

Your job is to write a function which increments a string, to create a new string.

If the string already ends with a number, the number should be incremented by 1.
If the string does not end with a number. the number 1 should be appended to the new string.
Examples:

foo -> foo1

foobar23 -> foobar24

foo0042 -> foo0043

foo9 -> foo10

foo099 -> foo100

Attention: If the number has leading zeros the amount of digits should be considered.

*/

const incrementString = (string) => {
  const match = string.match(/\d+$/);
  const prefix = match ? string.slice(0, match.index) : string;
  let number = match ? match[0] : 0;
  const incremented = (Number(number) + 1)
    .toString()
    .padStart(number.length, "0");

  return [prefix, incremented].join("");
};

console.log(incrementString("foo")); // foo1
console.log(incrementString("foobar23")); // foobar24
console.log(incrementString("foo099")); // foo100
