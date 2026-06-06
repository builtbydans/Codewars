// Write a method (or function, depending on the language) that converts a string to PascalCase,
// that is, all words must have their first letter capitalized and spaces must be removed.

// Examples (input --> output):
// "hello case" --> "HelloCase"
// "pascal case word" --> "PascalCaseWord"
// Don't forget to rate this kata! Thanks :)

// Note: for historical reasons, the function is named camelCase() or similar in some languages,
// but it should actually perform conversion to PascalCase.

export function camelCase(str: string): string {
  if (!str) return "";

  const camel = str
    .split(" ")
    .filter((word) => word.length > 0)
    .map((word) => word[0].toUpperCase() + word.slice(1).toLowerCase())
    .join("");

  return camel;
}

console.log(camelCase("test case"));
console.log(camelCase("test case method"));
console.log(camelCase("camel case"));
console.log(camelCase(""));
console.log(camelCase("QawbWtXPDKYKWJkwgCkUyWpQZAeuamKyPCofX"));
