/*
You need to write regex that will validate a password to make sure it meets the following criteria:

At least six characters long
contains a lowercase letter
contains an uppercase letter
contains a digit
only contains alphanumeric characters (note that '_' is not alphanumeric)
*/

export const REGEXP = new RegExp(
  "(?=.*[a-z].*)" + // Contains lowercase letter
    "(?=.*[A-Z].*)" + // Contains uppercase letter
    "(?=.*\\d.*)" + // Contains digit
    "^[a-zA-Z0-9]{6,}$", // 6 or more alphanumeric characters, and nothing else.
);
