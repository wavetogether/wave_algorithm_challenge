import java.util.*;

class Solution {
    public List<String> fizzBuzz(final int n) {
        final List<String> results = new ArrayList<>(n);

        for (int i = 1; i <= n; i++) {
            results.add(this.getResult(i));
        }

        return results;
    }

    private String getResult(final int n) {
        if (n % 15 == 0) {
            return "FizzBuzz";
        }

        if (n % 3 == 0) {
            return "Fizz";
        }

        if (n % 5 == 0) {
            return "Buzz";
        }

        return String.valueOf(n);
    }
}
