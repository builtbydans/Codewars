/*
    You are provided with a list (or array) of integer pairs.
    Elements of each pair represent the number of people that get on the bus (the first item) and the number of people
    that get off the bus (the second item) at a bus stop.
    Your task is to return the number of people who are still on the bus after the last bus
    stop (after the last array). Even though it is the last bus stop,
    the bus might not be empty and some people might still be inside the bus
 */

import java.util.ArrayList;

public class PeopleInTheBus {
    public static void main(String[] args) {
        ArrayList<int[]> list = new ArrayList<int[]>();
        list.add(new int[] {10,0});
        list.add(new int[] {3,5});
        list.add(new int[] {2,5});

        System.out.println(countPassengers(list));
    }

    public static int countPassengers(ArrayList<int[]> stops) {
        int passengers = 0;

        for (int[] stop : stops) {
            passengers += stop[0];
            passengers -= stop[1];
        }
        return passengers;
    }
}
