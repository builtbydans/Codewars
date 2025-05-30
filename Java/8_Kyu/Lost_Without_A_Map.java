import java.util.Arrays;

/*  CHALLENGE:
    Take an array, double each index and return a new array
*/

public class Lost_Without_A_Map {
    public static void main(String[] args) {

        int[] test = {1,2,3,4};
        System.out.println(Arrays.toString(map(test)));
    }

    public static int[] map(int[] arr) {
        int[] newArr = new int[arr.length];
        for (int i = 0; i < arr.length; i++) {
            newArr[i] = arr[i] * 2;
        }
        return newArr;
    }
}
