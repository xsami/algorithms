import java.util.HashMap;
import java.util.Map;

class Span {

    public static int maxSpan(int [] arr) {

        Map<Integer, Integer> myMap = new HashMap<Integer, Integer>();
        int index = 0,  best = 1;

        for (int number: arr) {
            if (!myMap.containsKey(number)) {
                myMap.put(number, index);
            }
            index++;
        }

        for (int i = arr.length - 1; i >= 0; i--) {
            int currentElement = arr[i];
            int difference = (i + 1) - (myMap.get(currentElement));
            if (difference > myMap.get(currentElement)) {
                myMap.replace(currentElement, difference);
            }
        }

        for (Map.Entry<Integer, Integer> entry : myMap.entrySet()) {
            if (entry.getValue() > best) {
                best = entry.getValue();
            }
        }

        return best;
    }

    public static void main(String []args) {
        int [][] array = new int[][] {
                {1, 2, 1, 1, 3},
                {1, 4, 2, 1, 4, 1, 4},
                {1, 4, 2, 1, 4, 0, 4}
        };

        for(int [] e : array ) {
            int res = maxSpan(e);
            System.out.println(res);
        }

    }
}