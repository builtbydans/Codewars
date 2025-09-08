/*
An anagram is the result of rearranging the letters of a word to produce a new word.
Complete the function to return true if the two arguments given are anagrams of each other; return false otherwise.
 */

import java.util.Arrays;

public class AnagramDetection {

    public static void main(String[] args) {
        System.out.println(isAnagram("", ""));
        System.out.println(isAnagram("ab", "cdcd"));
        System.out.println(isAnagram("foefet", "toffee"));
        System.out.println(isAnagram("Buckethead", "DeathCubeK"));
        System.out.println(isAnagram("Dormitory", "dirty room"));
    }

    public static boolean isAnagram(String a, String b) {
        String cleanA = a.toLowerCase().trim().replaceAll("\\s", "");
        String cleanB = b.toLowerCase().trim().replaceAll("\\s", "");

        char[] charA = cleanA.toCharArray();
        char[] charB = cleanB.toCharArray();

        Arrays.sort(charA);
        Arrays.sort(charB);

        return Arrays.equals(charA, charB);
    }
}
