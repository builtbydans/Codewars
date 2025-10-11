/*
    The marketing team is spending way too much time typing in hashtags.
    Let's help them with our own Hashtag Generator!

    Here's the deal:

    It must start with a hashtag (#).
    All words must have their first letter capitalized.
    If the final result is longer than 140 chars it must return false.
    If the input or the result is an empty string it must return false.
    Examples
    " Hello there thanks for trying my Kata"  =>  "#HelloThereThanksForTryingMyKata"
    "    Hello     World   "                  =>  "#HelloWorld"
    ""                                        =>  false
*/

const generateHashtag = (str) => {
  const trimmed = str.trim();
  if (!trimmed) return false;

  const words = trimmed.split(/\s+/);
  const capitalised = words.map(
    (word) => word.charAt(0).toUpperCase() + word.slice(1)
  );

  const hashtag = "#" + capitalised.join("");
  return hashtag.length > 140 ? false : hashtag;
};

console.log(generateHashtag("")); // , false, "Expected an empty string to return false"
console.log(generateHashtag(" ".repeat(200))); //, false, "Still an empty string"
console.log(generateHashtag("Do We have A Hashtag")); // , "#DoWeHaveAHashtag", "Expected a Hashtag (#) at the beginning."
console.log(generateHashtag("Codewars")); // , "#Codewars", "Should handle a single word."
console.log(generateHashtag("a".repeat(139))); // , "#A" + "a".repeat(138), "Should work"
console.log(generateHashtag("a".repeat(140))); // , false, "Too long"
console.log(generateHashtag("code" + " ".repeat(140) + "wars")); // , "#CodeWars"
