/**
 * Runtime: 309 ms, faster than 5.03% of Java online submissions for Best Time to Buy and Sell Stock.
 * Memory Usage: 42.1 MB, less than 5.31% of Java online submissions for Best Time to Buy and Sell Stock.
 */
class Solution {
    public int maxProfit(final int[] prices) {
        int maxProfie = 0;

        final int loop = prices.length;
        for (int i = 0; i < loop; i++) {
            final int buy = prices[i];

            for (int j = i; j < loop; j++) {
                final int sell = prices[j];

                final int profit = sell - buy;

                if (maxProfie < profit) {
                    maxProfie = profit;
                }
            }
        }

        return maxProfie;
    }
}
