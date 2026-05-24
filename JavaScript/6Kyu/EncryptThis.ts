/* Encrypt this!

You want to create secret messages which can be deciphered by the Decipher this! kata.
Here are the conditions:

- Your message is a string containing space separated words.
- You need to encrypt each word in the message using the following rules:
- The first letter must be converted to its ASCII code.
- The second letter must be switched with the last letter
- Keepin' it simple: There are no special characters in the input. */

export const encryptThis = (str: string): string => {
  if (!str) return "";

  return str
    .split(" ")
    .map((word) => {
      const firstCode = word.charCodeAt(0);

      if (word.length === 1) {
        return `${firstCode}`;
      }

      if (word.length === 2) {
        return `${firstCode}${word[1]}`;
      }

      const secondLetter = word[1];
      const lastLetter = word[word.length - 1];
      const middlePart = word.slice(2, -1);

      return `${firstCode}${lastLetter}${middlePart}${secondLetter}`;
    })
    .join(" ");
};

console.log(encryptThis("Hello")) // "72olle"
console.log(encryptThis("good")) // "103doo"
console.log(encryptThis("Thank you Piotr for all your help"))
