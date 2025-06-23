import java.util.Arrays;

public class SquareEveryDigit {
    public static void main(String[] args) {
        System.out.println(squareDigits(9119));
    }

    public static int squareDigits(int n) {
        int result = 0;
        StringBuilder builder = new StringBuilder();

        String num = Integer.toString(n);
        char[] chars = num.toCharArray();

        for (char aChar : chars) {
            int digit = Integer.parseInt(String.valueOf(aChar));
            int square = digit * digit;
            builder.append(square);
        }

        result = Integer.parseInt(builder.toString());
        return result;
    }
}
