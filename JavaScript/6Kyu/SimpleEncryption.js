/*

Implement a pseudo-encryption algorithm which given a string S and an integer N concatenates all the odd-indexed characters 
of S with all the even-indexed characters of S, this process should be repeated N times.

Examples:

encrypt("012345", 1)  =>  "135024"
encrypt("012345", 2)  =>  "135024"  ->  "304152"
encrypt("012345", 3)  =>  "135024"  ->  "304152"  ->  "012345"

encrypt("01234", 1)  =>  "13024"
encrypt("01234", 2)  =>  "13024"  ->  "32104"
encrypt("01234", 3)  =>  "13024"  ->  "32104"  ->  "20314"
Together with the encryption function, you should also implement a decryption function which reverses the process.

If the string S is an empty value or the integer N is not positive, return the first argument without changes.

*/

const encrypt = (text, n) => {
  if (n <= 0 || !text) return text;

  for (let i = 0; i < n; i++) {
    let odd = "";
    let even = "";

    for (let j = 0; j < text.length; j++) {
      if (j % 2) {
        odd += text[j];
      } else {
        even += text[j];
      }
    }
    text = odd + even;
  }
  return text;
};

const decrypt = (encryptedText, n) => {
  if (n <= 0 || !text) return encryptedText;

  for (let i = 0; i < n; i++) {
    let half = Math.floor(encryptedText.length / 2);
    let odd = encryptedText.slice(0, half);
    let even = encryptedText.slice(half);
    let result = "";

    for (let j = 0; j < even.length; j++) {
      result += even[j] + (odd[j] || "");
    }
    encryptedText = result;
  }
  return encryptedText;
};

console.log(encrypt("", -1));
console.log(encrypt("574823", -1));
console.log(encrypt("574823", 0));
console.log(encrypt("012345", 1));
console.log(encrypt("012345", 2));
console.log(encrypt("012345", 3));

console.log(decrypt("", -1));
console.log(decrypt("574823", -1));
console.log(decrypt("574823", 0));
console.log(decrypt("304152", 2));
console.log(decrypt("135024", 1));
console.log(decrypt("304152", 2));
