/*
    Complete the solution so that the function will break up camel casing, using a space between words.

    Example
    "camelCasing"  =>  "camel Casing"
    "identifier"   =>  "identifier"
    ""             =>  ""
*/

const solution = (str) => str.replace(/([A-Z])/g, " $1");

console.log(solution(""));
console.log(solution("camelCasing"));
console.log(solution("camelCasingTest"));
