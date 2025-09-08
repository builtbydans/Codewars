public class Sum_Arrays {
    public static void main(String[] args) {
        System.out.println(sum(new double[] { }));
        System.out.println(sum(new double[] {-2.398}));
        System.out.println(sum(new double[] {1, 2, 3}));
        System.out.println(sum(new double[] {1.1, 2.2, 3.3}));
        System.out.println(sum(new double[] {1, 5.2, 4, 0, -1}));
    }

    public static double sum(double[] numbers) {
        double sum = 0;
        for (double number: numbers) {
            sum += number;
        }
        return sum;
    }
}
