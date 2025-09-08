import java.util.Arrays;

public class AddLength {
    public static void main(String[] args) {

        String test1 = "apple ban";
        String test2 = "new york city";

        System.out.println(Arrays.toString(addLength(test1)));
        System.out.println(Arrays.toString(addLength(test2)));
    }

    public static String[] addLength(String str) {
        String[] words = str.split(" ");

        for (int i = 0; i < words.length; i++) {
            words[i] = words[i] + " " + words[i].length();
        }

        return words;
    }
}