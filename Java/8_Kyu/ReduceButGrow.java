/*
    Given a non-empty array of integers, return the result of multiplying the values together in order.
 */

public class ReduceButGrow {
    public static void main(String[] args) {
        System.out.println(grow(new int[]{1,2,3}));
        System.out.println(grow(new int[]{4,1,1,1,4}));
        System.out.println(grow(new int[]{2,2,2,2,2,2}));
    }

    public static int grow(int[] x){
        int output = 1;

        for (int num : x) {
            output *= num;
        }
        return output;
    }
}
