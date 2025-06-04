public class Remove_String_Spaces {
    public static void main(String[] args) {
        String test1 = "8 j 8   mBliB8g  imjB8B8  jl  B";
        String test2 = "8 8 Bi fk8h B 8 BB8B B B  B888 c hl8 BhB fd";

        System.out.println(noSpace(test1));
        System.out.println(noSpace(test2));
    }

    public static String noSpace(final String x) {
        return x.replace(" ", "");
    }
}
