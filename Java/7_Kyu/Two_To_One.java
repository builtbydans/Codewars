/*
    Take 2 strings s1 and s2 including only letters from a to z.
    Return a new sorted string (alphabetical ascending), the longest possible,
    containing distinct letters - each taken only once - coming from s1 or s2.

    Examples:
    a = "xyaabbbccccdefww"
    b = "xxxxyyyyabklmopq"
    longest(a, b) -> "abcdefklmopqwxy"

    a = "abcdefghijklmnopqrstuvwxyz"
    longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"
 */

import java.util.Arrays;
import java.util.LinkedHashSet;

public class Two_To_One {

    public static void main(String[] args) {
        String a = "xyaabbbccccdefww";
        String b = "xxxxyyyyabklmopq";
        System.out.println(longest(a, b));
    }

    public static String longest(String s1, String s2) {
        String combined = s1 + s2;
        char[] splitString = combined.toCharArray();
        Arrays.sort(splitString);

        LinkedHashSet<String> set = new LinkedHashSet<>();
        for (char c : splitString) {
            set.add(String.valueOf(c));
        }

        return String.join("", set);
    }
}