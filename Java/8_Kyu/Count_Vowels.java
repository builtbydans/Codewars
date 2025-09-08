/*
Write a method called countVowels that takes a String as input and returns the number of vowels in that string.
For this kata, consider vowels to be: a, e, i, o, u.
The input string may contain lowercase and uppercase letters, but only lowercase vowels count.
 */

public class Count_Vowels {
    public static void main(String[] args) {
        System.out.println(vowelCounter("hello"));
        System.out.println(vowelCounter("JAVA"));
        System.out.println(vowelCounter("Codewars"));
        System.out.println(vowelCounter("rhythm"));
    }

    public static int vowelCounter(String word) {
        String vowels = "aeiou";
        int vowelCounter = 0;

        for (int i = 0; i < word.length(); i++) {
            char c = word.charAt(i);
            if (vowels.indexOf(c) != -1) {
                vowelCounter++;
            }
        }

        return vowelCounter;
    }
}
