import java.util.Arrays;

public class SquareArray {

    public static void main(String[] args) {
        System.out.println(Arrays.toString(squareArr(new int[]{2, 3, 4})));
    }

    public static int[] squareArr(int [] arr) {

        int[] newArr = new int[arr.length];

        for (int i = 0; i < arr.length; i++) {
            int element = arr[i];
            int squared = element * element;
            newArr[i] = squared;
        }
        return newArr;
    }
}
