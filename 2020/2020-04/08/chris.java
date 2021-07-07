public class Solution {
    /**
     * O(n^2)
     **/
    public static int[] solution(final int[] numbers) {
        final int inputSize = numbers.length;
        final int[] result = new int[inputSize];

        for (int i = 0; i < inputSize; i++) {
            final int number = numbers[i];

            for (int j = i; j < inputSize; j++) {
                final int comparedNumber = numbers[j];

                if (comparedNumber < number) {
                    result[i]++;
                }
            }
        }

        return result;
    }
}
