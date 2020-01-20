from collections import Counter


class Solution(object):
    def numFriendRequests(self, ages):
        """
        :type ages: List[int]
        :rtype: int
        """
        # sorted_ages = sorted(ages, reverse=True)
        # request_num, j = 0, 0
        # for i in range(len(ages)):
        #     duplicate_num = 0
        #     if i == j:
        #         j += 1
        #     while j < len(ages) and sorted_ages[j] > sorted_ages[i] * 0.5 + 7:
        #         if sorted_ages[j] == sorted_ages[j - 1]:
        #             duplicate_num += 1
        #         elif duplicate_num != 0:
        #             request_num += duplicate_num * (duplicate_num + 1) / 2
        #             duplicate_num = 0
        #         j += 1
        #     request_num += j - i - 1 + duplicate_num * (duplicate_num + 1) / 2
        # return request_num
        sorted_counter = sorted(Counter(ages).items(), reverse=True)
        request_num, j, window_sum = 0, 0, 0
        for num, cnt in sorted_counter:
            while j < len(sorted_counter) and (window_sum == 0 or sorted_counter[j][0] > num * 0.5 + 7):
                window_sum += sorted_counter[j][1]
                j += 1
            window_sum -= cnt
            request_num += cnt * (cnt - 1) + cnt * window_sum if num > num * 0.5 + 7 else cnt * window_sum
        return request_num
