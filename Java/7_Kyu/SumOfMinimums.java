public class SumOfMinimums {
    public static void main(String[] args) {
        System.out.println(sumOfMinimums(new int[][]{{7, 9, 8, 6, 2}, {6, 3, 5, 4, 3}, {5, 8, 7, 4, 5}}));
    }
    public static int sumOfMinimums(int[][] arr){
        int sum = 0;

        for (int[] row : arr) {
            int minValue = row[0];
            for (int j : row) {
                if (j < minValue) {
                    minValue = j;
                }
            }
            sum += minValue;
        }
        return sum;
    }
}
