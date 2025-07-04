public class RomanEncoder {
    public static void main(String[] args) {
        System.out.println(solution(194));
        System.out.println(solution(1990));
    }

    public static String solution(int n) {
        StringBuilder sb = new StringBuilder();
        String[] roman = {"M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"};
        int[] nums = {1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1};

        for (int i = 0; i < nums.length; i++) {
            while (n >= nums[i]) {
                sb.append(roman[i]);
                n -= nums[i];
            }
        }
        return sb.toString();
    }
}
