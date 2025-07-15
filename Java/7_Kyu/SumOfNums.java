public class SumOfNums {
    public static void main(String[] args) {
        System.out.println(GetSum(5, -1));
        System.out.println(GetSum(505, 4));
        System.out.println(GetSum(321, 123));
        System.out.println(GetSum(-50, 0));
        System.out.println(GetSum(-1, -5));
        System.out.println(GetSum(-5, -5));

        System.out.println(getSum(5, -1));
    }

    public static int GetSum(int a, int b) {
        int start = Math.min(a, b);
        int end = Math.max(a, b);
        int count = end - start + 1;

        return (count * (start + end)) / 2;
    }

    // loop based
    public static int getSum(int a, int b) {
        int start = Math.min(a, b);
        int end = Math.max(a, b);
        int sum = 0;

        for (int i = start; i <= end; i++) {
            sum += i;
        }
        return sum;
    }
}
