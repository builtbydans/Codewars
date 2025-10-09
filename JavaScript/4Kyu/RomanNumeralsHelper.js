/*
    Write two functions that convert a roman numeral to and from an integer value. Multiple roman numeral values will be tested for each function.

    Modern Roman numerals are written by expressing each digit separately starting with the left most digit and skipping any digit with a value of zero. In Roman numerals:

    1990 is rendered: 1000=M, 900=CM, 90=XC; resulting in MCMXC
    2008 is written as 2000=MM, 8=VIII; or MMVIII
    1666 uses each Roman symbol in descending order: MDCLXVI.
    Input range : 1 <= n < 4000

    In this kata 4 should be represented as IV, NOT as IIII (the "watchmaker's four").

    Examples
    to roman:
    2000 -> "MM"
    1666 -> "MDCLXVI"
    86 -> "LXXXVI"
    1 -> "I"

    from roman:
    "MM"      -> 2000
    "MDCLXVI" -> 1666
    "LXXXVI"  ->   86
    "I"       ->    1
*/

const numeralObj = {
  M: 1000,
  CM: 900,
  D: 500,
  CD: 400,
  C: 100,
  XC: 90,
  L: 50,
  XL: 40,
  X: 10,
  IX: 9,
  V: 5,
  IV: 4,
  I: 1,
};

const RomanNumerals = {
  toRoman(num) {
    let roman = "";
    for (const key of Object.keys(numeralObj)) {
      while (num >= numeralObj[key]) {
        roman += key;
        num -= numeralObj[key];
      }
    }
    return roman;
  },

  fromRoman(str) {
    let total = 0;
    for (let i = 0; i < str.length; i++) {
      let current = numeralObj[str[i]];
      let next = numeralObj[str[i + 1]];
      current < next ? (total -= current) : (total += current);
    }
    return total;
  },
};

console.log(RomanNumerals.toRoman(1000)); // M
console.log(RomanNumerals.toRoman(4)); // IV
console.log(RomanNumerals.toRoman(1)); // I
console.log(RomanNumerals.toRoman(1990)); // MCMXC
console.log(RomanNumerals.toRoman(2008)); // MMVIII

console.log(RomanNumerals.fromRoman("XXI")); // 21
console.log(RomanNumerals.fromRoman("I")); // 1
console.log(RomanNumerals.fromRoman("IV")); // 4
console.log(RomanNumerals.fromRoman("MMVIII")); // 2008
console.log(RomanNumerals.fromRoman("MDCLXVI")); // 1666
