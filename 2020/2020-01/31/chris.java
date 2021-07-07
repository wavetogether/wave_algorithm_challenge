public class _31_Best {
    public int maxProfit(final int[] prices) {
        int totalProfit = 0;

        final int loop = prices.length - 1;

        for (int i = 0; i < loop; i++) {
            final int todayPrice = prices[i];
            final int tomorrowPrice = prices[i + 1];

            if (todayPrice < tomorrowPrice) {
                totalProfit += tomorrowPrice - todayPrice;
            }
        }

        return totalProfit;
    }
}
