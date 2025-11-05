/* 
ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 letters 
after it in the alphabet. ROT13 is an example of the Caesar cipher.

Create a function that takes a string and returns the string ciphered with Rot13. 
If there are numbers or special characters included in the string, 
they should be returned as they are. Only letters from the latin/english alphabet should be shifted, 
like in the original Rot13 "implementation".
*/

const cipher = (letter, boundary) => {
  return letter.charCodeAt() + 13 > boundary
    ? String.fromCharCode(letter.charCodeAt() + (13 - 26))
    : String.fromCharCode(letter.charCodeAt() + 13);
};

const rot13 = (message) => {
  return message
    .split("")
    .map((letter) => {
      if (/[a-zA-Z]/.test(letter)) {
        if (letter == letter.toUpperCase()) {
          return cipher(letter, 90);
        } else {
          return cipher(letter, 122);
        }
      }
      return letter;
    })
    .join("");
};

console.log(rot13("test")); // grfg
console.log(rot13("Hello123 World!")); // Uryyb123 Jbeyq!
console.log(rot13("Uryyb123 Jbeyq!")); // Hello123 World!
