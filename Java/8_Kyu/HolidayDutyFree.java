/*
    The purpose of this kata is to work out just how many bottles of duty free whiskey
    you would have to buy such that the savings over the normal high street price
    would effectively cover the cost of your holiday.
 */

public class HolidayDutyFree {
    public static void main(String[] args) {
        System.out.println(dutyFree(12,50,1000));
        System.out.println(dutyFree(17,10,500));
        System.out.println(dutyFree(24,35,3000));
    }

    public static int dutyFree(int normPrice, int discount, int hol) {
        double savingsPerBottle = normPrice * (discount / 100.0);
        return (int) (hol / savingsPerBottle);
    }
}
