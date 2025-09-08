public class SquareEveryDigit {
    public static void main(String[] args) {
        System.out.println(squareDigits(9119));
    }

    public static String squareDigits(int n) {
        StringBuilder builder = new StringBuilder();

        String num = Integer.toString(n);
        char[] chars = num.toCharArray();

        for (char aChar : chars) {
            int digit = Integer.parseInt(String.valueOf(aChar));
            int cubed = digit * digit * digit;
            builder.append(cubed);
        }

        return builder.toString();
    }
}