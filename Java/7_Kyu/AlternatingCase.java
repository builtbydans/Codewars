/*
    Define String.prototype.toAlternatingCase
    (or a similar function/method such as to_alternating_case/toAlternatingCase/ToAlternatingCase
    in your selected language; see the initial solution for details) such that each lowercase letter becomes uppercase and
    each uppercase letter becomes lowercase.
 */

public class AlternatingCase {
    public static void main(String[] args) {
        System.out.println(toAlternativeString("hElLo My naMe iS AlT"));
        System.out.println(toAlternativeString("HELLO WORLD"));
        System.out.println(toAlternativeString("1b4d59da8"));
        System.out.println(toAlternativeString(",/343"));
    }

    public static String toAlternativeString(String string) {
        char[] characters = string.toCharArray();
        StringBuilder sb = new StringBuilder();

        for (char c : characters) {
            if (Character.isLowerCase(c)) {
                sb.append(Character.toUpperCase(c));
            } else if (Character.isUpperCase(c)) {
                sb.append(Character.toLowerCase(c));
            } else {
                sb.append(c);
            }
        }
        return sb.toString();
    }
}
