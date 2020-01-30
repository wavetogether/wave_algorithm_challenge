class Solution(object):
    def maxProfit(self, prices):
        """
        :type prices: List[int]
        :rtype: int
        """
        return sum(sell - buy for buy, sell in zip(prices[:-1], prices[1:]) if sell - buy > 0)
