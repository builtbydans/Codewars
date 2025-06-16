import java.util.Arrays;
import java.util.LinkedHashSet;

public class Return_Negative {
    public static void main(String[] args) {
        System.out.println(makeNegative(-42));
        System.out.println(makeNegative(64));
        System.out.println(makeNegative(0));
    }

    public static int makeNegative(final int x) {
        return x > 0 ? -x : x;
    }
}
