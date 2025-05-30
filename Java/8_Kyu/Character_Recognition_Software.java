/*  CHALLENGE:
    Character recognition software is widely used to digitise printed texts. Thus the texts can be edited, searched and stored on a computer.

    When documents (especially pretty old ones written with a typewriter), are digitised character recognition softwares often make mistakes.
    Your task is correct the errors in the digitised text. You only have to handle the following mistakes:

    S is misinterpreted as 5
    O is misinterpreted as 0
    I is misinterpreted as 1
    The test cases contain numbers only by mistake.
*/

public class Character_Recognition_Software {
    public static void main(String[] args) {

        String test = "R00DYARDS K1PL1NG";
        System.out.println(correct(test));
    }

    public static String correct(String string) {
        char[] chars = string.toCharArray();

        for (int i = 0; i < chars.length; i++) {
            switch (chars[i]) {
                case '5' -> chars[i] = 'S';
                case '0' -> chars[i] = 'O';
                case '1' -> chars[i] = 'I';
            }
        }

        return new String(chars);
    }
}
