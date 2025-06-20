public class MaxAndMinInList {
    public static void main(String[] args) {
        System.out.println(min(new int[] {4, 6, 2, 1, 9, 63, -134, 566}));
        System.out.println(min((new int[] {42, 54, 65, 87, 0})));
        System.out.println(max((new int[] {4,6,2,1,9,63,-134,566})));
        System.out.println(max(new int[] {5}));
    }
        public static int min(int[] list) {
            int min = list[0];
            for (int n : list) {
                if (n < min) {
                    min = n;
                }
            }
            return min;
        }

        public static int max(int[] list) {
            int max = list[0];
            for (int n : list) {
                if (n > max) {
                    max = n;
                }
            }
            return max;
        }
}
