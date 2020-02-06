class Solution(object):
    def maxProfit(self, prices):
        """
        :type prices: List[int]
        :rtype: int
        """
        # min_price, max_price, profit = float('inf'), float('-inf'), 0
        # for price in prices:
        #     max_price = max(max_price, price)
        #     if min_price > price:
        #         profit = max(profit, max_price - min_price)
        #         min_price, max_price = price, float('-inf')
        # return max(profit, max_price - min_price) if profit >= 0 else 0

        min_price, profit = float('inf'), 0
        for price in prices:
            min_price = min(min_price, price)
            profit = max(profit, price - min_price)
        return profit
