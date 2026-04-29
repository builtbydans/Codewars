// Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

// Examples
// pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
// pigIt('Hello world !');     // elloHay orldway !

// Orignal Solution
  // const pigIt = str => {
  //   const split = str.split(" ")
  //   const pig = []

  //   for (let i = 0; i < split.length; i++) {
  //     if (/[a-zA-Z]/.test(split[i])) {
  //       const firstLetter = split[i].at(0)
  //       pig.push(`${split[i].slice(1)}${firstLetter}ay`)
  //     } else {
  //       pig.push(split[i])
  //     }
  //   }

  //   return pig.join(" ")
  // }

// Refactored Solution
const pigIt = str => {
  return str.split(" ").map(word => {
    if (/[a-zA-Z]/.test(word)) {
      const firstLetter = word.at(0)
      return `${word.slice(1)}${firstLetter}ay`
    }
    return word
  }).join(" ")
}

console.log(pigIt('Pig latin is cool')) // 'igPay atinlay siay oolcay'
console.log(pigIt('This is my string')) // 'hisTay siay ymay tringsay'
