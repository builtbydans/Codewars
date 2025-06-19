/*
    You are going to be given a non-empty string.
    Your job is to return the middle character(s) of the string.

    If the string's length is odd, return the middle character.
    If the string's length is even, return the middle 2 characters.
 */

public class Middle_Character {
    public static void main(String[] args) {
        System.out.println(getMiddle("test"));
        System.out.println(getMiddle("testing"));
        System.out.println(getMiddle("middle"));
        System.out.println(getMiddle("A"));
    }

    public static String getMiddle(String word) {
        String midChars = "";
        int length = word.length();
        int mid = length / 2;

        if (length % 2 == 0) {
            midChars += word.substring(mid - 1, mid + 1);
        } else {
            midChars += word.substring(mid, mid + 1);
        }
        return midChars;
    }
}
